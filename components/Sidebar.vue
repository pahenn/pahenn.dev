<script setup lang="ts">
  const options = [
    { label: "home", to: "/", shortcut: "1" },
    { label: "projects", to: "/projects", shortcut: "2" },
    { label: "blog", to: "/blog", shortcut: "3" },
    { label: "invoice creator", to: "/invoice", shortcut: "4" },
    { label: "engagement creator", to: "/engagement", shortcut: "5" },
  ]
  defineShortcuts({
    "1": () => navigateTo("/"),
    "2": () => navigateTo("/projects"),
    "3": () => navigateTo("/blog"),
    "4": () => navigateTo("/invoice"),
    "5": () => navigateTo("/engagement"),
  })
  // const { metaSymbol } = useShortcuts()
</script>

<template>
  <div
    id="left-sidebar"
    class="flex flex-col h-full w-[225px] px-1 overflow-auto shrink-0 border-r"
  >
    <div
      id="top-sidebar-items"
      class="flex flex-col py-3 px-1 space-y-3"
    >
      <ULink
        v-for="(option, index) in options"
        :key="option.shortcut"
        class="inline-flex h-9 border rounded justify-between items-center px-3 hover:bg-primary-100"
        active-class="bg-primary-200"
        :to="option.to"
      >
        <span>{{ option.label }}</span>
        <UKbd>{{ option.shortcut }}</UKbd>
      </ULink>
    </div>
  </div>
</template>
