<template lang="pug">
.table-component
  table
    tbody
      table-row(:rowData="columns")
      template(v-for="(row, index) in rows")
        table-row(:key=index, :rowData="row")
</template>

<script>
import TableRow from "@/components/elements/TableRow";

export default {
  name: "VTable",

  components: { TableRow },

  props: {
    columns: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

