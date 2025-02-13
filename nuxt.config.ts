import { prerender } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    "@nuxt/image"
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },
  colorMode: {
    classSuffix:''
  },
  nitro:{
  prerender: {
    routes: ['/sitemap.xml']
  }
}
})