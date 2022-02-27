<template lang="pug">
p STUDENTS
v-table(:columns="columns", :rows="rows")
</template>

<script>
import VTable from "@/components/elements/VTable";
import { studentService } from "@/api/student.service";
import { studentTableConfig, configComparator } from "@/utils/config";

export default {
  name: "StudentTab",

  components: { VTable },

  created() {
    this.setColumns();
    this.fetchStudents();
  },

  data() {
    return {
      studentTableConfig,
      columns: ["Name", "City", "Office"],
      rows: [
        ["Mary", "Chicago", 112],
        ["Oscar", "Milan", 434],
        ["Ghin", "Beijing", 5465],
      ],
    };
  },

  methods: {
    setColumns() {
      this.columns = this.studentTableConfig.map((el) => el.friendlyName);
    },
    async fetchStudents() {
      const { data } = await studentService.getStudentList();
      const arr = new Array;
      data.map((row) => {
        this.studentTableConfig.forEach((el) => {
          
        })
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>