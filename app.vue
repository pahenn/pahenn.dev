<script setup lang="ts">
  useHead({
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1",
      },
    ],
    link: [{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" }],
    htmlAttrs: {
      lang: "en",
    },
    bodyAttrs: {
      class: "antialiased font-sans text-black bg-white",
    },
  })
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
