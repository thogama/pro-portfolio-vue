<template>
    <VAppBar density="comfortable" scroll-behavior="hide" scroll-threshold="0" :elevation="2">
        <template v-slot:title>
            <div class="special-font text-primary">
                alan
            </div>
        </template>
        <template v-slot:append>
            <v-tabs color="secondary" v-model="tab">
                <v-tab :value="0">
                    <VSheet class="special-font">
                        Home
                    </VSheet>
                </v-tab>

                <v-tab :value="1">
                    <VSheet class="special-font">
                        About
                    </VSheet>
                </v-tab>
            </v-tabs>
        </template>
    </VAppBar>

    <VMain>
        <VRow style="min-height: 100vh;">
            <VContainer justify="center" class="h-screen-65 d-flex align-center justify-center special-font">
                <v-expand-transition>

                    <div v-if="trigger" class="text-primary text-h3 text-sm-h1 mx-sm-6 mx-6">
                        {{ phrases[currentphrase] }}
                    </div>
                </v-expand-transition>


            </VContainer>
            <VContainer>
                <VRow>


                    <VCol style="text-align: justify;" class="px-6" cols="12" md="4">
                        Desenvolvedor Sênior em Vue.js, resolvendo desafios com soluções elegantes e inovadoras.
                        Conheça
                        mais neste portfólio.
                    </VCol>

                </VRow>
            </VContainer>
        </VRow>


        <VRow align-content="center" style="min-height: 100vh;">
            <VContainer>
                <div class="px-3 py-5 ">
                    <div class="special-font ps-1">

                        Services
                    </div>
                    <div class="text-h2 text-primary py-3">
                        Skill-Set
                    </div>
                </div>
            </VContainer>
            <VContainer>
                <VRow justify="space-evenly">
                    <VCol v-for="item in items" cols="6" md="4">
                        <VCard rounded class="pa-2 ma-1">
                            <VRow class="ma-2 ma-sm-4">
                                <VCol cols="12 pa-0">
                                    <Icon class="text-primary" style="font-size: xxx-large;" :name="item.icon" />

                                </VCol>
                                <VCol class="text-h6 pa-1 mt-3" cols="12">

                                    {{ item.title }}

                                </VCol>
                                <VCol class="d-none d-sm-flex special-font text-body-2 pa-1">

                                    {{ item.content }}
                                </VCol>
                            </VRow>
                        </VCard>
                    </VCol>
                </VRow>


            </VContainer>
        </VRow>


    </VMain>
</template>

<script setup lang="ts">

let items: { icon: string, title: string, content: string }[] = [
    {
        icon: "mingcute:git-merge-line",
        title: "Git Flow",
        content: "Como desenvolvedor, o Git é um pilar do meu trabalho, permitindo gerenciar código de maneira eficiente e promover colaborações produtivas no GitHub."
    },
    {
        icon: "ph:globe-light",
        title: "Web",
        content: "Ampla variedade de tecnologias, como Nuxt, Next, Angular, Bootstrap, Ant-Design, Vuetify etc. Todas juntas ou separadas com expertise em Web."
    },
    {
        icon: "mdi:server-outline",
        title: "Back-End",
        content: "Experiência com TypeScript, PHP, Node e Python para soluções back-end robustas e eficientes, assim atuo como desenvolvedor Mid FullStack."
    },
    {
        icon: "cib:upwork",
        title: "Freelancing",
        content: "Adaptação rápida a diferentes projetos para atender às necessidades específicas de cada desafio como freelancer na Upwork"
    },
    {
        icon: "clarity:talk-bubbles-outline-badged",
        title: "References",
        content: "Explore as referências gentilmente compartilhadas por colegas de equipe ou clientes acerca do meu método de trabalho e abordagem em cada projeto."
    },
    {
        icon: "mdi:projector-screen-outline",
        title: "Projetos",
        content: "Conheça os projetos que particpei, cada um com suas próprias complexidades, objetivos distintos e em colaboração com diversas equipes talentosas."
    }
]

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