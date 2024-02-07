<script lang="ts" setup>
  const props = defineProps<{
    id: string
    client: string
    clientCode: string
    invoiceDate: string
    dueDate: string
    billToName: string
    billToEmail: string
    items: {
      description: string
      detail: string[]
      quantity: string
      price: string
      amount: string
    }[]
    total: string
  }>()
</script>

<template>
  <UCard
    class="max-w-4xl"
    :ui="{ shadow: 'shadow-none' }"
  >
    <template #header>
      <div class="justify-end">
        <h1 class="text-2xl font-semibold text-right">Invoice</h1>
        <p class="font-bold text-right">Patrick Hennessey Advisory LLC</p>
      </div>
    </template>
    <div class="flex py-3 justify-between">
      <div>
        <p class="text-xs uppercase">Bill To</p>
        <h1 class="font-semibold">{{ client }}</h1>
        <p class="text-sm">{{ billToName }}</p>
        <p class="text-sm">{{ billToEmail }}</p>
      </div>
      <div class="grid grid-cols-2 space-x-3 text-sm items-center">
        <p class="font-medium uppercase text-right">Invoice #</p>
        <p>{{ clientCode }}-{{ id }}</p>
        <p class="font-medium uppercase text-right">Invoice Date</p>
        <p>{{ invoiceDate }}</p>
        <p class="font-medium uppercase text-right">Due Date</p>
        <p>{{ dueDate }}</p>
      </div>
    </div>
    <div class="flex flex-col my-6 space-y-3">
      <div class="flex text-sm px-4 justify-between border-b">
        <div>
          <p>Items</p>
        </div>
        <div class="grid grid-cols-3 w-72 text-right">
          <p>Qty</p>
          <p>Price</p>
          <p>Amount</p>
        </div>
      </div>
      <div
        v-for="(item, i) in items"
        :key="i"
        class="flex px-4 justify-between items-start"
      >
        <div>
          <p>
            {{ item.description }}
          </p>
          <div
            v-for="(detail, i) in item.detail"
            :key="i"
          >
            <p class="text-sm ml-2">{{ detail }}</p>
          </div>
        </div>
        <div class="grid grid-cols-3 w-72 text-right items-start shrink-0">
          <p>
            {{ item.quantity }}
          </p>
          <p>{{ item.price }}</p>

          <p>{{ item.amount }}</p>
        </div>
      </div>
    </div>
    <div class="flex justify-end p-4 border-t">
      <div class="flex gap-6">
        <p>Total</p>
        <p>{{ total }}</p>
      </div>
    </div>
  </UCard>
</template>
