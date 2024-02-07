<script lang="ts" setup>
  const props = defineProps<{
    id: string
    client: string
    clientCode: string
    date: string
    amount: number
    items: {
      description: string
      quantity: number
      price: number
      amount: number
    }[]
    total: number
  }>()
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <div>
          <p class="font-bold">Patrick Hennessey Advisory LLC</p>
        </div>
      </template>
      <div class="flex py-3 justify-between">
        <h1 class="text-lg font-semibold">Invoice - {{ client }}</h1>
        <p class="font-medium">{{ clientCode }}-{{ id }}</p>
      </div>
      <div class="flex flex-col my-6 space-y-3">
        <div class="flex px-4 justify-between border-b">
          <div>
            <p>Item</p>
          </div>
          <div class="grid grid-cols-3 w-64 text-right">
            <p>Qty</p>
            <p>Price</p>
            <p>Amount</p>
          </div>
        </div>
        <div
          v-for="(item, i) in items"
          :key="i"
          class="flex px-4 justify-between"
        >
          <div>
            <p>
              {{ item.description }}
            </p>
          </div>
          <div class="grid grid-cols-3 w-64 text-right items-center shrink-0">
            <p>
              {{ item.quantity }}
            </p>
            <p>${{ item.price }}</p>

            <p>${{ item.amount }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-end p-4 border-t">
        <div class="flex gap-6">
          <p class="font-semibold">Total</p>
          <p class="font-semibold">${{ total }}</p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
