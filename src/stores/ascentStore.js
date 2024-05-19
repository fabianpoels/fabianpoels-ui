import api from '@/api'
import { defineStore } from 'pinia'

const grades = ['6a', '6a+', '6b', '6b+', '6c', '6c+', '7a', '7a+', '7b', '7b+', '7c', '7c+']
const styles = ['redpoint', 'flash', 'onsight']

export const useAscentStore = defineStore('report', {
  state: () => ({
    ascents: [],
    stats: {
      allTime: true,
      year: 2024,
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
  },
  actions: {
    async fetchAscents() {
      const { data } = await api.get('/public/ascents')
      this.ascents = data.sort((a, b) => b.number - a.number)
    },
  },
})
