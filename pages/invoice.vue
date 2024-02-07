<script lang="ts" setup>
  const invoice = {
    id: "00001",
    client: "Stacey Smith Coaching, LLC",
    clientCode: "SBC",
    date: "2021-10-01",
    amount: 30000,
    status: "Paid",
    items: [
      {
        description: "Fractional CTO (Monthly)",
        quantity: 3,
        price: 10000,
        amount: 30000,
      },
      { description: "Item 2", quantity: 1, price: 50, amount: 50 },
    ],
    total: 30050,
  }
</script>

<template>
  <div>
    <Invoice v-bind="invoice" />
  </div>
</template>
