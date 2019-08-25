<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-25 09:22:45
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-25 10:15:57
 -->
<template>
  <div class="tab-list">
    <div
      v-for="(item, index) in tabList"
      :key="index"
      class="tab-item"
      :class="{ active: index == current }"
      @mouseover="current = index"
      @mouseout="current = 0"
    >
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data() {
    return {
      tabList: ['未完赛直播', '近期完赛直播'],
      current: 0
    }
  }
}
</script>
<style lang="scss" scope>
.tab-list {
  display: flex;
  width: 100%;
  margin-top: 15px;
  .tab-item {
    width: 150px;
    height: 40px;
    line-height: 40px;
    margin-right: 4px;
    color: #999;
    background: #f1f1f1;
    text-align: center;
    cursor: pointer;
  }
  .active {
    background: #dc2221;
    color: #fff;
    transition: all 0.5s ease-in-out;
  }
}
</style>
