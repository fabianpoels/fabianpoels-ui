import { boot } from 'quasar/wrappers'
import { createGtag } from 'vue-gtag'

export default boot(async ({ app, router }) => {
  app.use(
    createGtag({
      enabled: process.env.PROD,
      tagId: import.meta.env.VITE_GTAG_ID,
      pageTracker: {
        router,
      },
    })
  )
})
