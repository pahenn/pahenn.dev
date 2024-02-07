<script setup lang="ts"></script>

<template>
  <div class="flex flex-col w-full h-[100dvh]">
    <div class="flex h-full w-full">
      <Sidebar />
      <div class="flex flex-col w-full px-4 py-3 overflow-auto">
        <slot />
      </div>
    </div>
    <ClientOnly>
      <LazyUDocsSearch hide-color-mode />
    </ClientOnly>
  </div>
</template>
