<template lang="pug">
.card(:style="cardStyle")
  slot
</template>

<script>
export default {
  name: "VCard",

  props: {
    maxWidth: { type: String },
  },

  computed: {
    cardStyle() {
      return `max-width: ${this.maxWidth}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: inline-block;
  background-color: $card-bg-color;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  margin: 2rem auto;
  max-width: 60rem;
  min-width: 30rem;
}
</style>