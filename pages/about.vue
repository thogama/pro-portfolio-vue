<template>
    <VRow class="h-screen" :class="theme.dark ? 'text-black' : ''">

        <VContainer class="px-xl-10" style="align-self: center;">
            <VFadeTransition>


                <VRow v-if="trigger" justify="center">
                    <VCol cols="6">


                        <VCard style="transform: scale(-1,1);" variant="text" class="d-flex justify-end">

                            <VImg placeholder="a beatiful boy" style="max-width: 39rem;max-height: 65vh"
                                src="/photo2.png" />
                        </VCard>

                    </VCol>
                    <VDivider v-if="screen.mdAndUp" vertical />
                    <VCol class="mx-md-10 pt-8 text-h5 special-font text-center d-flex flex-column justify-center align-center">
                        {{ $t("I'm") }}
                        <span class="text-primary text-h1 special-font mx-3">
                            Alan
                        </span>
                        <br />
                        <span class="text-h3 special-font">

                            {{ $t("A fullstack developer") }}
                        </span>
                        <span>
                            {{ $t("and a") }}

                            <span class="text-primary text-h5">
                                Vue
                            </span>
                            {{ $t("lover") }}
                        </span>

                    </VCol>
                </VRow>
            </VFadeTransition>
        </VContainer>


    </VRow>

    <VRow class="h-screen">
        <VContainer class="align-self-center">
            <div class="px-3 pt-10">
                <div :class="theme.dark ? 'text-black' : ''" class="special-font  ps-1 mx-3">

                    {{ $t("Who") }}
                </div>
                <div class="text-h2 text-primary py-3 mx-3">
                    {{ $t("Id") }}
                </div>
            </div>
        </VContainer>
        <VContainer>
            <VTable class="border rounded mx-3" fixed-header density="comfortable" hover>
                <thead>
                    <tr>
                        <th class="text-left text-h5">
                            {{ $t("FAQ") }}
                        </th>
                        <th class="text-left text-h5 pa-2">
                            {{ $t("Answer") }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in faqs">
                        <td>{{ $t(item.question) }}</td>
                        <td class="pa-2" v-if="item.question != 'languages'">{{ item.answer }}</td>
                        <td v-else>
                            <VRow justify="space-between" align="center">

                                <VCol xs="11" md="9">

                                    <VProgressLinear color="primary" height="5" model-value="100" />
                                </VCol>
                                <VCol class="d-flex justify-center align-center">

                                    <Icon size="1.5rem" name="twemoji:flag-brazil" />

                                </VCol>

                            </VRow>
                            <VRow class="mt-0" align="center">

                                <VCol xs="11" md="9">

                                    <VProgressLinear color="light-blue-darken-1" height="5" model-value="70" />
                                </VCol>
                                <VCol class="d-flex justify-center">

                                    <Icon size="1.5rem" name="twemoji:flag-for-flag-united-states" />

                                </VCol>

                            </VRow>
                        </td>
                    </tr>
                </tbody>
            </VTable>
        </VContainer>


    </VRow>
    <VRow>
        <VContainer>
            <div class="px-3 py-5 ">
                <div :class="theme.dark ? 'text-black' : ''" class="special-font  ps-1 mx-3">
                    {{ $t("Expertise") }}

                </div>
                <div class="text-h2 text-primary py-3 mx-3">
                    {{ $t("Stack") }}
                </div>
            </div>
        </VContainer>
    </VRow>
</template>
<script setup lang="ts">
import { themeStore } from '@/stores/theme';
import { useDisplay } from 'vuetify/lib/framework.mjs';
let trigger = ref(false)
let screen = ref(useDisplay())

function calculateAge(birthDate: string) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    return age.toLocaleString();
}


onMounted(() => {
    trigger.value = !trigger.value
})

let theme = themeStore()

let faqs: { question: string, answer: string }[] = [
    { question: "name", answer: "Alan Jônatas de Oliveira Gama" },
    { question: "old", answer: calculateAge("2001-11-05") },
    { question: "where", answer: "Aracaju, Sergipe, Brazil (GMT-3)" },
    { question: "languages", answer: "" },
    { question: "exp", answer: calculateAge("2020-01-01") },
    { question: "time", answer: "40" }
]


</script>