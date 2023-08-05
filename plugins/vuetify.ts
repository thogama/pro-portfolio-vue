import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme: ThemeDefinition = {
    dark: true,
    colors: {
        primary: "#008000",
        secondary:"#00B300"
    }
}


export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
            },
        },

        ssr: true,
        components,
        directives,
    })

    nuxtApp.vueApp.use(vuetify)
})
