<script setup lang="ts">
  defineShortcuts({
    "1": () => navigateTo("/"),
    "2": () => navigateTo("/blog"),
    "3": () => navigateTo("/projects"),
  })
</script>

<template>
  <div class="flex flex-col w-full h-[100dvh]">
    <div class="flex h-full w-full">
      <Sidebar />
      <div class="flex flex-col w-full px-4 pb-4 overflow-auto">
        <slot />
      </div>
    </div>
    <ClientOnly>
      <LazyUDocsSearch />
    </ClientOnly>
  </div>
</template>
