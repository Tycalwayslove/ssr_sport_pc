<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-25 09:33:00
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-02 20:17:14
 -->
<template>
  <div class="content-match-fixed">
    <a
      v-for="(item, index) in playDateList"
      :key="index"
      :class="{ active: index == isActive }"
      @click="handleSelectDate(index)"
    >
      <p v-if="index < 3">{{ DateTitle[index] }}</p>
      <p v-else>{{ item.date }} {{ item.weekday }}</p>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return {
      isActive: -1,
      DateTitle: ['今天', '明天', '后天']
    }
  },
  computed: {
    ...mapGetters({
      playDateList: 'sport/getPlayDatesList'
    })
  },
  methods: {
    handleSelectDate(index) {
      console.log(this.playDateList)
      this.isActive = index
    }
  }
}
</script>

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
