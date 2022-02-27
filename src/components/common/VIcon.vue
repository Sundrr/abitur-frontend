<template lang="pug">
svg(
  xmlns="http://www.w3.org/2000/svg",
  :width="width",
  :height="height",
  :viewBox="viewBox",
  :aria-labelledby="iconName",
  role="presentation"
)
  title(:id="iconName", lang="en") {{ iconName }} icon
  g(:fill="iconColor")
    slot
</template>

<script>
export default {
  name: "VIcon",

  props: {
    iconName: {
      type: String,
      default: "",
    },
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    viewBox: {
      type: String,
      default: "0 0 18 18",
    },
    iconColor: {
      type: String,
      default: "#FFFFFF",
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin: auto;
  width: 100%;
  margin-bottom: -2px;
}
</style>