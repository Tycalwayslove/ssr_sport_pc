<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-06 05:08:25
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-18 06:16:48
 -->
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
          >{{ item.name }}</a>
        </div>
      </div>
    </div>
    <div class="nav-top-box">
      <div class="nav-top">
        <ul>
          <li v-for="(item, index) in navTopList" :Key="index" @click="handleClickTabTop(index)">
            <a :class="topnum === index ? 'hover' : ''">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <nav-bar></nav-bar>
      <div class="content-left">
        <div class="content-match">
          <div class="sport-list">
            <tab></tab>
            <sport-list listData="sportList"></sport-list>
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
import axios from 'axios'
import moment from 'moment'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import SportList from '@/components/site-components/sport-list'
import Tab from '@/components/base-components/tab'
import NavBar from '@/components/base-components/nav-bar'
import Recommend from '@/components/site-components/recommend'

export default {
  components: { Recommend, SportList, Tab, NavBar },
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
      topnum: 1,
      sportList: [] // 比赛列表
    }
  },
  computed: {
    // ...mapGetters({
    //   getSportTypeParames: 'sport/getSportTypeParames', // 类别参数
    //   getPlayDate: 'sport/getPlayDate' // 日期
    // })
  },
  fetch({ app, $axios }) {
    const params = {
      firstClassId: 0,
      secondClassId: 0,
      thirdClassId: 0,
      playDate: moment().format('YYYY-MM-DD'),
      currentState: '2',
      days: 7,
      daysAheadOrRear: 1
    }
    return $axios
      .get('/api/GetPlayData/GetPalyForTimeSlot', { params })
      .then((res) => {
        console.log(res)
        const { Data, State } = res
        console.log(Data.List)
        const params = Data.List
        // 比赛列表赋值
        app.store.commit('sport/pushSportList', { params })
      })
  },
  mounted() {
    // window.addEventLister('scroll', this.handleScroll)
  },

  methods: {
    // ...mapActions({
    //   getSportList: 'sport/getSportList'
    // }),
    ...mapMutations({
      setPlayDate: 'sport/setPlayDate',
      pushSportList: 'sport/pushSportList'
    }),
    handleClickTabTop(index) {
      this.topnum = index
    },
    handleScroll() {
      // var scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop
      // console.log(scrollTop)
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
