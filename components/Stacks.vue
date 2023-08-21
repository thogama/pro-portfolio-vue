<template>
    <section id="stack">

        <VRow class=" h-screen-65 mb-3" justify="center">
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
            <VContainer class="mx-1">
                <VRow class="mx-2" v-if="trigger" justify="center">
                    <VCol cols="6">


                        <VCard :class="theme.dark ? 'text-black' : ''" variant="elevated" class="h-100 pa-1">
                            <VCardTitle>

                                <VRow class="ma-2 ma-sm-4">
                                    <div class="text-h5">

                                        Front-End
                                    </div>
                                </VRow>
                            </VCardTitle>
                            <VRow class="pa-3">
                                <VCol class="text-center pa-3" cols="4" v-for="front in frontend">
                                    <Icon v-if="screen.mdAndUp" class="text-h3 pa-1" :name="front" />
                                    <Icon v-else class="text-h5" :name="front" />

                                </VCol>
                            </VRow>
                        </VCard>

                    </VCol>
                    <VCol cols="6">
                        <VCard :class="theme.dark ? 'text-black' : ''" variant="elevated" class="h-100 pa-1">
                            <VCardTitle>

                                <VRow class="ma-2 ma-sm-4">
                                    <div class="text-h5">

                                        Back-End
                                    </div>
                                </VRow>
                            </VCardTitle>
                            <VRow class="pa-3">

                                <VCol class="text-center pa-3" cols="4" v-for="back in backend">
                                    <Icon v-if="screen.mdAndUp" class="text-h3 pa-1" :name="back" />
                                    <Icon v-else class="text-h5" :name="back" />

                                </VCol>
                            </VRow>
                        </VCard>
                    </VCol>
                </VRow>
            </VContainer>
        </VRow>
    </section>
</template>

<script setup lang="ts">
import { themeStore } from '@/stores/theme';
import { useDisplay } from 'vuetify/lib/framework.mjs';

let trigger = ref(false)
let theme = themeStore()
let screen = ref(useDisplay())


onMounted(() => {
    trigger.value = !trigger.value
})

let frontend = [
    "fa6-brands:bootstrap",
    "teenyicons:css3-solid",
    "ion:logo-javascript",
    "akar-icons:typescript-fill",
    "mdi:vuejs",
    "mdi:react",
    "ant-design:ant-design-outlined",
    "fa6-brands:sass",
    "ion:logo-angular"

]

let backend = [
    "ion:logo-javascript",
    "akar-icons:typescript-fill",
    "teenyicons:nodejs-solid",
    "tabler:brand-laravel",
    "mdi:language-python",
    "carbon:sql",
    "simple-icons:express",
    "tabler:brand-aws",
    "mdi:firebase"

]
</script>