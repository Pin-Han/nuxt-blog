<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSidenav :show="displaySideNav" @close="displaySideNav = false" />
    <nuxt />
  </div>
</template>
<script>
// import Header from "~/components/Header.vue";
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";
// import THeSideNavToggle from "@/components/Navigation/THeSideNavToggle.vue";

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data() {
    return {
      displaySideNav: false
    };
  }
};
</script>

<style>
html {
  font-family: "Open Sans", "sans-serif";
}
body {
  margin: 0;
}
</style>
