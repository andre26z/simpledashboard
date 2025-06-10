import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    globals: true,
    // Add this section to specify the DOM environment
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom', // or 'happy-dom'
      },
    },
  }
})