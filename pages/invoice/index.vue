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

  // Save invoice as yaml using yaml
  // append as new node in content/invoices/sbc.yaml
  const save = async () => {
    await $fetch(`/api/invoices/${invoice.clientCode}`, {
      method: "PUT",
      body: JSON.stringify(invoice),
    })
    return
  }
</script>

<template>
  <Invoice v-bind="invoice" />
  <div class="flex">
    <UButton @click="save">Save</UButton>
    <ULink to="/invoice/print">Print</ULink>
  </div>
</template>
