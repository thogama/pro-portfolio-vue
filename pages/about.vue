<template>
    <VContainer>

        <VRow style="min-height: 100vh;">


            <VCol sm="3" cols="6">
                <v-expand-transition>

                </v-expand-transition>
            </VCol>
        </VRow>

    </VContainer>
</template>

<script setup lang="ts">

let trigger = ref(false)
onMounted(() => {
    trigger.value = !trigger.value
})
</script>

<style scoped>
.clipme {
    background-image: url('http://localhost:3000/blob.svg');
}
</style>