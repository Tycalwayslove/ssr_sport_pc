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
    <div class="nav-top-box">
      <div class="nav-top">
        <ul>
          <li
            v-for="(item, index) in navTopList"
            :Key="index"
            @click="handleClickTabTop(index)"
          >
            <a :class="topnum === index ? 'hover' : ''">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="content-match-fixed">
        <a href="#">今天</a>
        <a href="#">明天</a>
        <a href="#">后天</a>
      </div>
      <div class="content-left">
        <div class="content-match">
          <div class="sport-list">
            这里是数据列表组件
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="block">
          <div class="block-title">
            <h1>热门频道</h1>
          </div>
          <div class="block-content">
            <a href="#">CCTV5</a>
            <a href="#">CCTV5</a>
            <a href="#">CCTV5</a>
          </div>
        </div>
        <!-- 足球集锦 -->
        <div class="match-block">
          <div class="block-title">
            <h1>足球比赛集锦录像</h1>
            <a class="more">查看更多>></a>
          </div>
          <!-- 集锦录像推荐 -->
          <Recommend></Recommend>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Recommend from '@/components/site-components/recommend'
export default {
  components: { Recommend },
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
      ],
      navTopList: [
        {
          name: '首页',
          path: '/index'
        },
        {
          name: '直播',
          path: '/zhibo'
        },
        {
          name: '集锦',
          path: '/jijin'
        }
      ],
      topnum: 1
    }
  },
  created() {
    this.getTabs()
  },
  methods: {
    ...mapActions({
      getTabs: 'sport/getTabs'
    }),
    handleClickTabTop(index) {
      this.topnum = index
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
    }
  }

  .nav-top-box {
    height: 48px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    .nav-top {
      width: 1200px;
      height: 48px;
      margin: 0 auto;
      ul {
        li {
          float: left;
          margin-left: 70px;
          margin-top: 12px;
          & a {
            font-size: 18px;
            color: #000000;
            line-height: 24px;
            display: block;
            cursor: pointer;
            &:hover {
              color: #dc2221;
            }
          }
          .hover {
            position: relative;
            color: #dc2221;
            &:after {
              position: absolute;
              content: '';
              bottom: -7px;
              left: 14px;
              width: 12px;
              height: 0;
              border-bottom: 2px solid #dc2221;
            }
          }
        }
      }
    }
  }
  .content {
    width: 1200px;
    height: auto;
    margin: 10px auto 0;
    position: relative;
    .content-match-fixed {
      background: #fff;
      width: 80px;
      position: absolute;
      top: 0px;
      left: 0;
      padding-bottom: 24px;
      & a {
        display: block;
        font: 16px/28px 'microsoft yahei';
        color: #333;
        width: 80%;
        text-align: center;
        margin: 18px auto 0;
      }
    }
    .content-left {
      width: 760px;
      height: auto;
      left: 90px;
      background: #fff;
      float: left;
      position: relative;
      .content-match {
        height: auto;
        margin: 0 20px;
        min-height: 400px;
      }
    }
    .content-right {
      width: 340px;
      height: auto;
      float: right;
      .block-title {
        height: 40px;
        background: #017bd1;
        & h1 {
          float: left;
          padding: 0 15px;
          height: 40px;
          font: 20px/40px 'microsoft yahei';
          color: #fff;
          text-align: center;
          background: #dc2221;
        }
        .more {
          float: right;
          font: 14px/40px 'microsoft yahei';
          color: #fff;
          margin-right: 10px;
        }
      }
      .block {
        height: auto;
        margin-bottom: 10px;
        padding-bottom: 20px;
        background: #fff;

        .block-content {
          & a {
            font: 14px/14px 'microsoft yahei';
            color: #333;
            display: inline-block;
            margin: 22px 0 0 22px;
          }
        }
      }
      .match-block {
        background: #fff;
      }
    }
  }
}
</style>
