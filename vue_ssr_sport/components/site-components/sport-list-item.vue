<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-24 10:25:07
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-24 11:04:15
 -->
<template>
  <div class="sport-list-item pxborder">
    <a href="#">
      <div class="left">
        <div class="time">23:00</div>
        <div class="type">罗甲</div>
      </div>
      <div class="center">
        <div class="msg">
          <span class="name">CSMS雅西</span>
          <img
            src="http://zq.win007.com/Image/team/images/2012121833546.jpg"
            alt=""
          />
        </div>
        <div class="score">
          <p>
            <span>3</span>
            <span class="line">-</span>
            <span>1</span>
          </p>
        </div>
        <div class="msg msg2">
          <img
            src="http://zq.win007.com/Image/team/images/2012121833546.jpg"
            alt=""
          />
          <span class="name">CSMS雅西</span>
        </div>
      </div>
      <div class="right">
        <div class="state">
          <a href="#">视频直播</a>
        </div>
      </div>
    </a>
  </div>
</template>
<style lang="scss" scope>
.sport-list-item {
  position: relative;
  width: 100%;
  height: 68px;
  line-height: 68px;
  color: #999;
  & a {
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
        min-width: 60px;
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
