<template>
    <VRow style="min-height: 100vh">
        <VContainer justify="center" class="h-screen-65 d-flex align-center justify-center special-font">
            <v-expand-transition>

            </v-expand-transition>


        </VContainer>
    </VRow>
</template>

<script setup lang="ts">

let trigger = ref(false)
onMounted(() => {
    trigger.value = !trigger.value
})
</script>

<style scoped>
</style>