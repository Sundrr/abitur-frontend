<template lang="pug">
.registration-tab
  .registration-tab__wrapper
    .registration-tab__data-block
      v-input.registration-tab__element(
        :value="phoneEmail",
        placeholder="Фамилия"
      )
      v-input.registration-tab__element(:value="phoneEmail", placeholder="Имя")
      v-input.registration-tab__element(
        :value="phoneEmail",
        placeholder="Отчество"
      )
      v-input.registration-tab__element(
        :value="phoneEmail",
        placeholder="Dropdown"
      )
    .filler
    .registration-tab__data-block
      v-input.registration-tab__element(
        :value="phoneEmail",
        placeholder="E-mail"
      )
      v-input.registration-tab__element(
        :value="phoneEmail",
        placeholder="Пароль"
      )
      v-input.registration-tab__element(
        :value="phoneEmail",
        placeholder="Подтверждение"
      )
  .registration-tab__confirm-block
    .personal-data
      p.personal-data__politics Я согласен с политикой в отношении обработки персональных данных
      v-button.enter-tab__element(@click="onEnterClick") ЗАРЕГИСТРИРОВАТЬСЯ
</template>

<script>
import VInput from "@/components/common/VInput";
import VButton from "@/components/common/VButton";

export default {
  name: "RegistrationTab",

  components: { VInput, VButton },
};
</script>

<style lang="scss" scoped>
.registration-tab {
  &__wrapper {
    display: flex;
  }
  &__element {
    margin: 1rem 0;
  }
}
.personal-data {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  &__politics {
    max-width:20rem;
  }
}
.filler {
  width: 2rem;
}
</style>