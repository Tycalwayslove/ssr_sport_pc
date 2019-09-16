<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-24 10:25:07
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-17 06:12:07
 -->
<template>
  <div>
    <div v-for="(value,key) in sportList" :key="key">
      <div class="list-item">
        <div class="item-date">{{key | formatDays}}</div>
        <div  v-for="(item,i) in value" :key="i" class="sport-list-item pxborder">
          <div class="href">
            <div class="left">
              <div class="time">{{item.playTimeStart | formatDate}}</div>
              <div class="type">{{item.typeFirstName}}</div>
            </div>
            <div class="center">
              <div class="msg">
                <span class="name">{{item.teamAName}}</span>
                <img :src="item.teamALogo" alt />
              </div>
              <div class="score">
                <div>
                  <span>{{item.teamAPoint}}</span>
                  <span class="line">-</span>
                  <span>{{item.teamBpoint}}</span>
                </div>
              </div>
              <div class="msg msg2">
                <img :src="item.teamBLogo" alt />
                <span class="name">{{item.teamBName}}</span>
              </div>
            </div>
            <div class="right">
              <div class="state">
                <a href="#">视频直播</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'SportItem',
  data() {
    return {}
  },
  props: {
    sportList: {
      type: Object,
      default: {}
    }
  },
  computed: {},
  filters:{
    formatDate:function(value){
      if(!!value){
        return moment(value).format('HH:MM')
      }
      return ''

    },
    formatDays:function(value){
      if(!!value){
        return moment(value).format('MM-DD')
      }
      return ''

    }
  }
}
</script>
<style lang="scss" scope>
.item-date {
  margin-top: 15px;
  position: relative;
  padding-left: 20px;

  &:before {
    position: absolute;
    content: '';
    display: block;
    top: 4px;
    left: 0;
    width: 8px;
    height: 8px;
    background: red;
  }
}
.sport-list-item {
  position: relative;
  width: 100%;
  height: 68px;
  line-height: 68px;
  color: #999;
  .href {
    display: flex;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #333;
    .left {
      display: flex;
      flex: 0;
      .time {
        margin: 0 12px;
      }
      .type {
        margin: 0 14px;
        max-width: 120px;
        min-width: 80px;
      }
    }
    .center {
      display: flex;
      flex: 1;
      justify-content: center;
      .msg {
        display: flex;
        align-items: center;
        .name {
          margin-right: 20px;
        }
        & img {
          width: 28px;
          height: 28px;
        }
      }
      .msg2 {
        & img {
          margin-right: 20px;
        }
      }
      .score {
        margin: 0 20px;
        .line {
          margin: 0 8px;
        }
      }
    }
    .right {
      display: flex;
      flex: 0;
      .state {
        min-width: 120px;
        max-width: 200px;
        & a {
          color: #d0021b;
        }
      }
    }
  }
}
</style>
