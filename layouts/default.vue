<template>
    <VThemeProvider :theme="currentTheme.dark ? 'LightTheme' : 'DarkTheme'">
        <VLayout full-height
            :style="currentTheme.dark ? 'background-image: url(/noise2.png)' : 'background-image: url(/noise.png)'"
            style="background-repeat: repeat;">
            <VAppBar :image="currentTheme.dark ? '/noise2.png' : '/noise.png'" scroll-behavior="fade-image" :elevation="2">
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
                            <VIcon v-if="!currentTheme.dark" size="large" icon="mdi:mdi-white-balance-sunny" />
                            <VIcon v-else size="large" icon="mdi:mdi-moon-waxing-crescent" />

                        </template>
                    </VBtn>
                </template>
            </VAppBar>

            <VMain>


                <slot />
            </VMain>


        </VLayout>
    </VThemeProvider>
</template>

<script setup lang="ts">
import { themeStore } from '@/stores/theme';


let currentTheme = themeStore()

function changeTheme() {
    currentTheme.change()
}

let route = useRouter().currentRoute.value.name?.toString().includes("about")
let tab = ref(route ? 1 : 0)
const localePath = useLocalePath()


</script>

<style scoped></style>