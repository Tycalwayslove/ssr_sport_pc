<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-25 09:33:00
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-18 06:05:50
 -->
<template>
  <div class="content-match-fixed">
    <a
      v-for="(item, index) in playDateList"
      :key="index"
      :class="{ active: index == anchorIndex }"
      @click="handleSelectDate(index)"
    >
      <p v-if="index < 3">{{ DateTitle[index] }}</p>
      <p v-else>{{ item.date }} {{ item.weekday }}</p>
    </a>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
  name: 'NavBar',
  data() {
    return {
      DateTitle: ['今天', '明天', '后天']
    }
  },
  computed: {
    ...mapGetters({
      playDateList: 'sport/getPlayDatesList',
      anchorIndex: 'sport/getterAnchorIndex',

    })
  },
  methods: {
    ...mapMutations({
      setAnchorIndex:'sport/setAnchorIndex'
    }),
    handleSelectDate(index) {
      console.log(this.playDateList)
      this.setAnchorIndex(index)
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
    cursor: pointer;
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
