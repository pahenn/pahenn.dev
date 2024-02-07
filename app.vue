<script setup lang="ts">
  useHead({
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
    ],
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: "antialiased text-black bg-white",
    },
  })
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
