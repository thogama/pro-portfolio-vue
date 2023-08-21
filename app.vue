<template>
  <NuxtLayout>
    <VBtn :style="screen.mdAndUp?'right: 2%':'right:1%'" density="comfortable" style=";bottom: 5%;z-index: 1;" position="fixed"
      @click="changeTheme" icon label="Switch" inset>
      <template v-slot:default>
        <VIcon v-if="!currentTheme.dark" size="small" icon="mdi:mdi-white-balance-sunny" />
        <VIcon v-else size="small" icon="mdi:mdi-moon-waxing-crescent" />

      </template>
    </VBtn>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { themeStore } from '@/stores/theme';
import { useDisplay } from 'vuetify/lib/framework.mjs';
let screen = ref(useDisplay())


let currentTheme = themeStore()

function changeTheme() {
  currentTheme.change()
}
useHead({
  title: "Alan J. O. Gama",
})
</script>


<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500&family=JetBrains+Mono&display=swap');

body {
  font-family: 'JetBrains Mono', monospace;
  overflow-x: clip;
  overflow-y: clip;
}


.h-screen-65 {
  min-height: 65vh;
}

.special-font {
  font-family: 'Comfortaa', cursive !important;

}
</style>