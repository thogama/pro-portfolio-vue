import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'


const DarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "#008000",
        secondary: "#00B300",
    }
}
const LightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        primary: "#008000",
        secondary: "#00B300",
    }
}



export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            defaultTheme: 'DarkTheme',
            themes: {
                DarkTheme,
                LightTheme,
            },


        },

        ssr: true,
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})
