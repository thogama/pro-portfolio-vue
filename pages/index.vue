<template>
    <VRow class="h-screen">
        <VContainer class="h-screen-65 d-flex align-center justify-center special-font">
            <v-expand-transition>
                <div v-if="trigger" class="text-primary text-h3 text-sm-h1 mx-sm-6 mx-6">
                    {{ $t(phrases[currentphrase]) }}
                </div>
            </v-expand-transition>


        </VContainer>
        <VContainer>
            <VRow>
                <VCol>


                    <div :class="theme.dark ? 'text-black' : ''" variant="elevated" style="text-align: justify;"
                        class="px-7">
                        {{ $t("intro") }}
                    </div>

                </VCol>
            </VRow>
        </VContainer>
    </VRow>


    <VRow align-content="center">
        <VContainer>
            <div class="px-3 py-5 ">
                <div :class="theme.dark ? 'text-black' : ''" class="special-font  ps-1 mx-3">

                    {{ $t("Services") }}
                </div>
                <div class="text-h2 text-primary py-3 mx-3">
                    {{ $t("Highlights") }}
                </div>
            </div>
        </VContainer>
        <VContainer class="mb-5 mb-md-8">
            <VRow class="px-5" justify="space-evenly">
                <VCol v-if="breakpoints.sm" v-for="item, index in items" cols="6" md="4">
                    <v-fade-transition :style="{ transitionDelay: `${index * 0.1}s` }">
                        <VCard rounded class="d-flex h-100 pa-2 ma-1">

                            <VRow class="ma-2 ma-sm-4" justify="end">
                                <VBtn variant="tonal" density="compact" icon>

                                    <VIcon icon="mdi:mdi-plus" />
                                </VBtn>
                                <VCol cols="12 pa-0 d-flex justify-space-between align-center">

                                    <Icon class="text-primary" style="font-size: xxx-large;" :name="item.icon" />

                                </VCol>
                                <VCol class="text-h6 pa-1 mt-3" cols="12">

                                    {{ $t(item.title) }}

                                </VCol>
                                <VCol class="d-none d-sm-flex special-font text-body-2 pa-1">

                                    {{ $t(item.content) }}

                                </VCol>
                            </VRow>

                        </VCard>
                    </v-fade-transition>
                </VCol>

            </VRow>


        </VContainer>
    </VRow>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { themeStore } from "@/stores/theme";


let theme = themeStore()
let breakpoints = useDisplay()

let items: { icon: string, title: string, content: string }[] = [
    {
        icon: "mingcute:git-merge-line",
        title: "Git Flow",
        content: "As a developer, Git is a cornerstone of my work, enabling me to manage code efficiently and foster productive collaborations on GitHub."
    },
    {
        icon: "ph:globe-light",
        title: "Web",
        content: "Expertise in a wide range of technologies, such as Nuxt, Next, Angular, Bootstrap, Ant-Design, and Vuetify, whether used individually or in combination, with a focus on web development."
    },
    {
        icon: "mdi:server-outline",
        title: "Back-End",
        content: "Skilled in TypeScript, PHP, Node, and Python for robust and efficient back-end solutions, positioning me as a Mid FullStack developer."
    },
    {
        icon: "cib:upwork",
        title: "Freelancing",
        content: "Quick adaptation to a variety of projects, precisely addressing the unique needs of each challenge as a freelancer on Upwork."
    },
    {
        icon: "ph:chats-circle-fill",
        title: "References",
        content: "Explore the references kindly shared by teammates or clients about my work method and approach in each project."
    },
    {
        icon: "mdi:projector-screen-outline",
        title: "Projects",
        content: "Discover the projects I've participated in, each with its own complexities, distinct objectives, and in collaboration with various talented teams."
    }
]

let phrases = [
    "Creating smart, efficient, and innovative solutions.",
    "Building quality into every line of code",
    "Enhancing robustness and dynamics with Vue"
]

let currentphrase = ref(0)

let trigger = ref(false)
onMounted(() => {
    trigger.value = !trigger.value

    setInterval(() => {
        trigger.value = false

        setTimeout(() => {
            if (currentphrase.value >= phrases.length - 1) {
                currentphrase.value = 0
            } else {
                currentphrase.value += 1
            }

            trigger.value = true
        }, 500)
    }, 3500)
})
definePageMeta({
    layout: "default"
})


</script>

<style scoped></style>