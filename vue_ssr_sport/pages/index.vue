<template>
  <div class="container">
    <div class="nav">
      <div class="nav-center">
        <div class="nav-logo">
          <a href="#">
            <img src alt />
          </a>
        </div>
        <div class="nav-list">
          <a href="#">NBA</a>
          <a href="#">中超</a>
          <a href="#">英超</a>
          <a href="#">西甲</a>
          <a href="#">CBA</a>
        </div>
      </div>
    </div>
    <div class="nav_top"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
.container {
  background: #f1f1f1;
  .nav {
    height: 48px;
    background-image: linear-gradient(-180deg, #f04745 0%, #dc2221 100%);
    .nav-center {
      width: 1200px;
      height: 48px;
      margin: 0 auto;
      .nav-logo {
        float: left;
        width: 78px;
        height: 34px;
        margin: 0 auto;
      }
    }
  }
}
</style>
