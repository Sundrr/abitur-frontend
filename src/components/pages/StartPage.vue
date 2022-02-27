<template lang="pug">
.start-page
  .logo-wrapper
    v-icon(viewBox="0 0 430 107", width="430", height="107")
      icon-logo-horizontal
  v-card.start-page__card
    .entry-block
      ul.entry-block__tab-list
        li.entry-block__tab(
          v-for="tab in enterTabData",
          :key="tab.id",
          :class="{ 'active-tab': tab.id === currentTab.id }",
          @click="onTabSelect(tab)"
        ) {{ tab.name }}
    component(:is="currentTab.component")
</template>

<script>
import VCard from "@/components/common/VCard";
import VIcon from "@/components/common/VIcon";
import IconLogoHorizontal from "@/components/icons/IconLogoHorizontal";
import EnterTab from "@/components/elements/EnterTab";
import RegistrationTab from "@/components/elements/RegistrationTab";
import { enterTabData } from "@/utils/config";

export default {
  name: "StartPage",

  components: { VCard, VIcon, IconLogoHorizontal, EnterTab, RegistrationTab },

  data() {
    return {
      enterTabData,
      currentTab: enterTabData[0],
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
.start-page {
    margin: 0 auto;
    width: 100%;
    background-color: $page-bg-color;
}
.entry-block {
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
.logo-wrapper {
  margin: 2rem auto;
  width: 100%;
}
</style>