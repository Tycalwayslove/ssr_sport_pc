<template>
  <v-app>
    <v-toolbar app fixed>
      <img alt src="@/assets/img/logo.png" style="width:60px;" />
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-container class="acontainer">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: '卓越直播'
    }
  }
}
</script>
<style lang="scss" scoped>
.acontainer {
  height: 100%;
  padding: 0px;
}
</style>
