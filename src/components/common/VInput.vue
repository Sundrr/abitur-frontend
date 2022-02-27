<template lang="pug">
.input-component
  input.input-component__input(
    :value="value",
    :placeholder="placeholder",
    :type="type",
    :disabled="disabled",
    @input="onInput",
    @change="$emit('change', $event)",
    @keydown="$emit('keydown', $event)"
  )
</template>

<script>
export default {
  name: "VInput",

  model: {
    prop: "value",
    event: "input",
  },

  props: {
    value: { type: [String, Number], default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, requires: false, default: "text" },
    disabled: { type: Boolean, requires: false, default: false },
  },

  data() {
    return {};
  },

  methods: {
    onInput(ev) {
      this.$emit("input", ev.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-component {
  width: 100%;
  &__input {
    @include set-font;
    padding: 10px;
    min-height: 3rem;
    outline: none;
    border: none;
    width: 100%;
    max-width: 30rem;
    // color: $primary-text-color;
    background-color: $element-bg-color;
    border-radius: 10px;
    &::placeholder {
      font-style: italic;
    }
  }
}
</style>