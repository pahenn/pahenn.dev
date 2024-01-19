<script setup lang="ts">
  const options = [
    { label: "Home", shortcut: 1, to: "/" },
    { label: "Blog", shortcut: 2, to: "/blog" },
    { label: "Projects", shortcut: 3, to: "/projects" },
  ]
  const { metaSymbol } = useShortcuts()
</script>

<template>
  <div
    id="left-sidebar"
    class="flex flex-col h-full w-[225px] px-1 overflow-auto shrink-0 border-r"
  >
    <!-- <div id="search-button"></div> -->
    <div
      id="top-sidebar-items"
      class="flex flex-col py-3 px-1 space-y-3"
    >
      <ULink
        v-for="option in options"
        :key="option.shortcut"
        class="inline-flex h-9 border rounded justify-between items-center px-3 hover:bg-gray-50"
        active-class="outline"
        :to="option.to"
      >
        <span>{{ option.label }}</span>
        <UKbd>{{ option.shortcut }}</UKbd>
      </ULink>
    </div>
  </div>
</template>
