<template>
    <VContainer style="min-height: 100vh;">
        <VRow>
            <VCol v-for="item, index in list" sm="6" cols="12">

                <v-fade-transition class=" h-100" :style="{ transitionDelay: `${index * 0.1}s` }">

                    <VCard>
                        <VCardTitle class="text-primary special-font">
                            {{ $t(item.title) }}
                        </VCardTitle>
                        <VCardText class="pb-0">
                            <VImg max-height="250px" min-height="250px" cover aspect-ratio="1/1" :src="item.image" />

                            <VExpansionPanels>
                                <VExpansionPanel class="my-3 border">
                                    <VExpansionPanelTitle class="text-primary special-font">
                                        {{ item.stack }}
                                    </VExpansionPanelTitle>
                                    <VExpansionPanelText>
                                        {{ $t(item.description) }}
                                    </VExpansionPanelText>

                                </VExpansionPanel>
                            </VExpansionPanels>
                        </VCardText>
                        <VCardActions class="ma-3 mt-0">
                            <VSpacer />
                            <VBtn color="primary" variant="flat" append-icon="mdi:mdi-arrow-right">
                                {{ $t("go") }}
                            </VBtn>
                        </VCardActions>
                    </VCard>

                </v-fade-transition>
            </VCol>
        </VRow>

    </VContainer>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';



let screen = ref(useDisplay())

let list: { title: string, image: string, link: string, description: string, stack: string }[] = [
    {
        title: "project1_title",
        image: "/projeto1.jpg",
        link: "https://www.saocristovao.se.gov.br/obras",
        description: "project1_description",
        stack: "JS + JQuery + PHP"
    },
    {
        title: "project2_title",
        image: "/projeto2.jpg",
        link: "https://www.leorad.com.br",
        description: "project2_description",
        stack: "Nuxt + Vuetify + PHP"
    }
]
</script>