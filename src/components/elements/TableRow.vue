<template lang="pug">
.table-row
  tr
    td(v-for="cell in rowData" :key="cell")  {{ cell }}
</template>

<script>
export default {
  name: "TableRow",

  props: {
    rowData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>