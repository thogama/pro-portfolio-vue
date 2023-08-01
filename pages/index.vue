<template>
    <VAppBar density="comfortable" scroll-threshold="0" :elevation="2">
        <template v-slot:title>
            <div class="special-font text-primary">
                alan
            </div>
        </template>
        <template v-slot:append>
            <v-tabs color="primary" v-model="tab">
                <v-tab :value="0">
                    <Button>
                        Home
                    </Button>
                </v-tab>

                <v-tab :value="1">
                    <Button>
                        About
                    </Button>
                </v-tab>
            </v-tabs>
        </template>
    </VAppBar>
    <VMain>
        <VContainer justify="center" class="h-50 d-flex align-center justify-center special-font">
            <v-expand-transition>

                <div v-if="trigger" class="text-primary text-h3 text-sm-h1 mx-sm-6 mx-6">
                    {{ phrases[currentphrase] }}
                </div>
            </v-expand-transition>


        </VContainer>
        <VContainer>
            <VRow>
                <v-hover>
                    <template v-slot:default="{ isHovering, props }">

                        <VCol style="text-align: justify;" v-bind="props" :style="{ color: isHovering ? 'white' : 'gray' }" class="px-6" cols="12" md="4">
                            Desenvolvedor Full-Stack em Vue.js, resolvendo desafios com soluções elegantes e inovadoras.
                            Conheça
                            mais no meu portfólio.
                        </VCol>
                    </template>
                </v-hover>
            </VRow>

        </VContainer>
    </VMain>
</template>

<script setup lang="ts">

let phrases = [
    "Criando soluções inteligentes, eficientes e inovadoras.",
    "Construindo qualidade em cada linha de código.",
    "Elevando a robustez e a dinâmica com Vue."
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
        }, 500)  // Espera 1 segundo para iniciar a próxima frase
    }, 5000)  // Intervalo entre mudanças de frases
})
definePageMeta({
    layout: "default"
})

let tab = ref(0)

</script>

<style scoped></style>