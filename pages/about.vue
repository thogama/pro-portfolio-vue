<template>
    <VRow class="h-screen" :class="theme.dark ? 'text-black' : ''">

        <VFadeTransition>
            <VContainer  v-if="trigger" class="px-xl-10 " style="align-self: center;">


                <VRow justify="center">
                    <VCol cols="6">


                        <VCard variant="text" class="d-flex justify-end">

                            <VImg style="max-width: 39rem;transform: scale(-1,1);max-height: 65vh;" src="/photo2.png" />

                        </VCard>

                    </VCol>
                    <VDivider v-if="screen.mdAndUp" vertical/>
                    <VCol 
                        class="pt-8 text-h5 special-font text-center d-flex flex-column justify-center align-center">
                        {{ $t("I'm") }}
                        <span class="text-primary text-h1 special-font mx-3">
                            Alan
                        </span>
                        <br />
                        <span class="text-h3 special-font">

                            {{ $t("A fullstack developer") }}
                        </span>
                        <span >
                            {{ $t("and a") }}
                            
                            <span class="text-primary text-h5">
                                Vue
                            </span>
                            {{ $t("lover") }}
                        </span>

                    </VCol>
                </VRow>
            </VContainer >
        </VFadeTransition>
    </VRow>
</template>
<script setup>
import { themeStore } from '@/stores/theme';
import { useDisplay } from 'vuetify/lib/framework.mjs';
let trigger = ref(false)
let screen = ref(useDisplay())

onMounted(() => {
    trigger.value = !trigger.value
})

let theme = themeStore()
</script>