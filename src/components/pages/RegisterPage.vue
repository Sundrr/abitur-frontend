<template lang="pug">
.register-component
    h1.register-component__header Регистрационная форма
    .register-component__element
        p.register-component__label Фамилия
        input
    .register-component__element
        p.register-component__label Имя
        input
    .register-component__element
        p.register-component__label Отчество
        input
    .register-component__element
        p.register-component__label Город
        input
    .register-component__element
        p.register-component__label Школа
        input
    .register-component__element
        p.register-component__label Класс
        input
    .register-component__submit
        button.btn Отправить
        button.btn Отменить
</template>

<script>
export default {
    name: "RegisterPage",
}
</script>

<style lang="scss" scoped>
.register-component {
    display: flex;
    flex-direction: column;
    &__header {
        display: flex;
        justify-content: center;
    }
    &__element {
        display: flex;
        justify-content: center;
        margin: 0.5rem 0;
    }
    &__label {
        margin-right: 1rem;
        min-width: 5rem;
    }
    &__submit {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }
}
.btn {
    margin: 0.5rem;
}
</style>