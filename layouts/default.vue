<template>
    <VLayout :style="currentTheme ? 'background-image: url(noise2.png)' : 'background-image: url(noise.png)'"
        style="min-height: 100vh;background-repeat: repeat;">
        <VThemeProvider :theme="currentTheme ? 'LightTheme' : 'DarkTheme'">
            <VAppBar scroll-behavior="hide" :elevation="2">
                <template v-slot:title>
                    <div class="special-font text-primary">
                        alan

                    </div>
                </template>
                <template v-slot:append>
                    <VTabs slider-color="primary" v-model="tab">
                        <NuxtLink :to="localePath('index')">
                            <VTab :value="0">
                                <VSheet class="special-font">
                                    {{ $t("Home") }}
                                </VSheet>
                            </VTab>
                        </NuxtLink>

                        <NuxtLink :to="localePath('about')">
                            <VTab :value="1">
                                <VSheet class="special-font">
                                    {{ $t("About") }}
                                </VSheet>
                            </VTab>
                        </NuxtLink>

                    </VTabs>
                    <VBtn @click="changeTheme" icon label="Switch" inset>
                        <template v-slot:default>
                            <VIcon v-if="theme.current.value.dark" size="large" icon="mdi:mdi-white-balance-sunny" />
                            <VIcon v-else size="large" icon="mdi:mdi-moon-waxing-crescent" />

                        </template>
                    </VBtn>
                </template>
            </VAppBar>
            <VMain>


                <slot />
            </VMain>

        </VThemeProvider>
    </VLayout>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

let theme = useTheme()

let currentTheme = ref(theme.current.value.dark)

function changeTheme() {
    currentTheme.value = !currentTheme.value
}

let route = useRouter().currentRoute.value.name?.toString().includes("about")
let tab = ref(route ? 1 : 0)
const localePath = useLocalePath()


</script>

<style scoped></style>