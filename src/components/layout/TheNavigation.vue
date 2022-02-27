<template lang="pug">
.nav-component
    .nav-component__left-block
        .nav-component__element
            input
        .nav-component__element
            button(@click="onSignInClick") Войти по номеру телефона
        .nav-component__element
            button(@click="onRegisterClick") Зарегистрироваться
        .nav-component__element
            button(@click="onAdminClick") Войти как администратор
    .nav-component__right-block
        .nav-component__element
            button(@click="onExitClick") Выйти
</template>

<script>
export default {
  name: "TheNavigation",

  methods: {
    onRegisterClick() {
      this.$router.push({ name: "register" });
    },
    onSignInClick() {
      this.$router.push({ name: "programs" });
    },
    onAdminClick() {
      this.$router.push({ name: "admin" });
    },
    onExitClick() {
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-component {
  display: flex;
  justify-content: space-between;
  &__left-block {
      display: flex;
  }
  &__right-block {
      display: flex;
  }
  &__element {
    margin: 0.5rem;
  }
}
</style>