<template lang="pug">
.program-component
    h1.program-component__header Страница с таблицей направлений подготовки
    table-row(
            name="Название программы"
            code="Код программы"
            slots="Количество мест"
            passingScore="Проходной балл"
            tuitionCosts="Стоимость обучения"
    )
    ul
        table-row(
            v-for="program in programData"
            :key="program.name"
            :name="program.name"
            :code="program.code"
            :slots="program.slots"
            :passingScore="program.passingScore"
            :tuitionCosts="program.tuitionCosts"
            )
</template>

<script>
import TableRow from '@/components/elements/TableRow.vue';

export default {
    name: "ProgramPage",

    components: { TableRow },

    data() {
        return {
            programData: [
                { name: 'Инноватика', code: '111111', slots: 10, passingScore: 55.6, tuitionCosts: 555 },
                { name: 'Бизнес-информатика', code: '222222', slots: 10, passingScore: 55.6, tuitionCosts: 555 },
                { name: 'Экономика', code: '333333', slots: 10, passingScore: 55.6, tuitionCosts: 555 },
                { name: 'Информационные технологии', code: '444444', slots: 10, passingScore: 55.6, tuitionCosts: 555 },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>

</style>