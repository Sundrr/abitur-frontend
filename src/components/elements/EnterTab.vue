<template lang="pug">
.enter-tab
  v-input.enter-tab__element(:value="phoneEmail", placeholder="Почта/телефон")
  v-input.enter-tab__element(
    v-model="password",
    placeholder="Ваш пароль",
    :disabled="true"
  )
  .filler
  v-button.enter-tab__element(@click="onEnterClick") ВОЙТИ
  v-button.enter-tab__element(
    @click="onForgetClick",
    buttonStyle="transparent"
  ) Забыли пароль?
</template>

<script>
import VInput from "@/components/common/VInput";
import VButton from "@/components/common/VButton";

export default {
  name: "EnterTab",

  components: { VInput, VButton },

  data() {
    return {
      phoneEmail: "",
      password: "123",
    };
  },

  methods: {
    onEnterClick() {
      console.log("enter");
    },
    onForgetClick() {
      console.log("forget");
    },
  },
};
</script>

<style lang="scss" scoped>
.enter-tab {
  &__element {
    margin: 1rem 0;
  }
}
.filler {
  height: 2rem;
}
</style>