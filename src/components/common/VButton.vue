<template lang="pug">
.button-wrapper
  button.button(:class="buttonClass", @click="$emit('click')")
    slot
</template>

<script>
export default {
  name: "VButton",

  props: {
    buttonStyle: { type: String, default: "default" },
  },

  computed: {
    buttonClass() {
      return this.buttonStyle === "transparent" ? "transparent-class" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include set-font;
  width: 100%;
  max-width: 30rem;
  outline: none;
  border: none;
  padding: 10px;
  min-height: 3rem;
  border-radius: 15px;
  background-color: $button-bg-color;
  color: $button-text-color;
  font-weight: 700;
}
.transparent-class {
    background-color: $button-bg-color-transparent;
    color: $primary-text-color;
    font-weight: 400;
}
</style>