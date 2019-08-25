<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-25 09:33:00
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-25 09:42:56
 -->
<template>
  <div class="content-match-fixed">
    <a href="#" class="active">今天</a>
    <a href="#">明天</a>
    <a href="#">后天</a>
    <a href="#">xi</a>
  </div>
</template>

<style lang="scss" scope>
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
    &:hover {
      color: #fff;
      background: #dc2221;
    }
  }
  .active {
    color: #fff;
    background: #dc2221;
  }
}
</style>
