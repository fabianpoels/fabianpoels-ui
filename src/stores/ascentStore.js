import api from '@/api'
import { defineStore } from 'pinia'

const grades = ['6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+', '8a']
const styles = ['redpoint', 'flash', 'onsight']

export const useAscentStore = defineStore('ascents', {
  state: () => ({
    ascents: [],
    locations: [],
    stats: {
      allTime: true,
      year: 2025,
    },
  }),
  getters: {
    ascentsPerGrade: (state) => {
      const result = {}

      grades.forEach((grade) => {
        result[grade] = { redpoint: 0, flash: 0, onsight: 0, total: 0 }
      })

      state.ascents.forEach((ascent) => {
        if (ascent.style === 'toprope') return
        if (!grades.includes(ascent.grade)) return
        if (!state.stats.allTime && ascent.year !== state.stats.year) return
        result[ascent.grade][ascent.style]++
        result[ascent.grade].total++
      })

      return result
    },
    grades: () => grades,
    styles: () => styles,
    filteredAscents: (state) => {
      if (state.stats.allTime) return state.ascents
      return state.ascents.filter((a) => a.year === state.stats.year)
    },
    cities: (state) => [...new Set(state.locations.map((l) => l.city))].filter((c) => !!c),
    countries: (state) => [...new Set(state.locations.map((l) => l.country))],
  },
  actions: {
    async fetchAscents() {
      const { data } = await api.get('/public/ascents')
      if (!Array.isArray(data)) return
      this.ascents = data.sort((a, b) => b.number - a.number)

      const locations = []

      this.ascents.forEach((a) => {
        const location = locations.find((l) => l.crag === a.crag)
        if (location) {
          if (
            location.country === a.country &&
            location.area === a.area &&
            location.city === a.city
          ) {
            if (a.sector && !location.sectors.includes(a.sector)) location.sectors.push(a.sector)
          } else {
            console.log(`!!DUPLICATE: ${a.crag}`)
            locations.push({
              crag: a.crag,
              country: a.country,
              countryCode: a.countryCode,
              area: a.area,
              city: a.city,
              sectors: a.sector ? [a.sector] : [],
            })
          }
        } else {
          locations.push({
            crag: a.crag,
            country: a.country,
            countryCode: a.countryCode,
            area: a.area,
            city: a.city,
            sectors: a.sector ? [a.sector] : [],
          })
        }
      })

      // console.table(locations)
      this.locations = locations
    },

    async addAscent(ascent) {
      const { data } = await api.post('/admin/ascent', { ...ascent })
    },
  },
})
