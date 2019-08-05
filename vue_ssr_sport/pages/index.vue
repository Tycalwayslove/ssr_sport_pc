<template>
  <div class="container">
    <div class="nav">
      <div class="nav-center">
        <div class="nav-logo">
          <a href="#">
            <img src="@/assets/img/logo.png" />
          </a>
        </div>
        <div class="nav-list">
          <a
            v-for="(item, index) in navList"
            :Key="index"
            :href="item.path"
            class="active"
          >
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
    <div class="nav_top">
      <a
        v-for="(item, index) in navList"
        :Key="index"
        :href="item.path"
        class="active"
      >
      </a>
    </div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      navList: [
        {
          name: 'NBA',
          path: '/nba'
        },
        {
          name: 'NBA',
          path: '/nba'
        },
        {
          name: 'NBA',
          path: '/nba'
        },
        {
          name: 'NBA',
          path: '/nba'
        },
        {
          name: 'NBA',
          path: '/nba'
        }
      ]
    }
  }
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
        height: 100%;
        margin: 0 auto;
        & a {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
        & img {
          width: 100%;
          margin: 4px auto;
        }
      }
      .nav-list {
        position: relative;
        float: left;
        margin-left: 43px;
        color: #fff;
        font-size: 18px;
        font-stretch: 100%;
        & a {
          position: relative;
          float: left;
          color: #fff;
          height: 100%;
          font: 16px/48px 'microsoft yahei';
          margin-left: 43px;
        }
        .active:after {
          position: absolute;
          bottom: 0;
          left: 10px;
          border: 4px solid transparent;
          border-bottom: #fff;
        }
      }
      .nav_top {
        width: 100%;
        height: 48px;
        background: black;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
