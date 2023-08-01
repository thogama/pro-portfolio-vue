<template>
  <NuxtLayout>
    <VLayout style="min-height: 100vh;">
      <NuxtPage />
    </VLayout>
  </NuxtLayout>
</template>
<script setup>

</script>
<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=JetBrains+Mono&display=swap');

html {
  overflow-y: auto;
}

body {
  font-family: 'JetBrains Mono', monospace;
}

.special-font {
  font-family: 'Comfortaa', cursive !important;

}
</style>