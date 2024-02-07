<script lang="ts" setup>
  const invoice = {
    id: "00005",
    client: "Stacey Smith Coaching, LLC",
    clientCode: "SBC",
    invoiceDate: "2024-02-08",
    dueDate: "2024-02-08",
    status: "Paid",
    billToName: "Stacey Boehman",
    billToEmail: "accounting@staceyboehman.com",
    items: [
      {
        description: "Fractional CTO",
        detail: ["Billed quarterly in advanced", "2/1/24 - 4/30/24"],
        quantity: "3",
        price: "$10,000.00",
        amount: "$30,000.00",
      },
    ],
    total: "$30,000.00",
  }

  definePageMeta({
    layout: "no-sidebar",
  })
</script>

<template>
  <div class="scale-75">
    <Invoice v-bind="invoice" />
  </div>
</template>
