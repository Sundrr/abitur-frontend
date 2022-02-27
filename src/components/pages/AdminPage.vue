<template lang="pug">
.admin-page
  ul.admin-page__tab-list
    li.admin-page__tab(
      v-for="tab in adminTabData",
      :key="tab.id",
      :class="{ 'active-tab': tab.id === currentTab.id }",
      @click="onTabSelect(tab)"
    ) {{ tab.name }}
  component(:is="currentTab.component")
</template>

<script>
import StudentTab from "@/components/elements/StudentTab";
import ResponsibleTab from "@/components/elements/ResponsibleTab";
import EventTab from "@/components/elements/EventTab";
import SchoolTab from "@/components/elements/SchoolTab";
import { adminTabData } from "@/utils/config";

export default {
  name: "AdminPage",

  components: { StudentTab, EventTab, ResponsibleTab, SchoolTab },

  data() {
    return {
      adminTabData,
      currentTab: adminTabData[0],
    };
  },

  methods: {
    onTabSelect(tab) {
      this.currentTab = tab;
    },
  },
};
</script>


<style lang="scss" scoped>
.admin-page {
  @include set-font;
  &__tab-list {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    margin-bottom: 3rem;
  }
  &__tab {
    color: $secondary-text-color;
  }
}
.active-tab {
  color: $primary-text-color;
  text-decoration: underline;
}
</style>