// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // devtools: true,
    css: [
        '@/assets/css/__nuxt.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        // '@nuxt/image',
        '@sidebase/nuxt-session',
        '@formkit/nuxt',
        'nuxt-icon'
    ],
    webpack: {
        extractCSS: false // fixes css from wrong layouts appearing
    },
    session: {
        session: {
            expiryInSeconds: 60 * 60 * 24 * 2, // 2 days
        }
    }
})
