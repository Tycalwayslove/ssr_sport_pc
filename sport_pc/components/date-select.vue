<template>
  <div class="date-list">
    <div
      class="left-btn"
      @click="handleBeforeDate">
      <i class="iconfont icon-before" />
    </div>
    <ul class="date-box">
      <li
        v-for="(item, index) in week"
        :key="index"
        :class="[select === index ? 'active' : '', 'date-item']"
        @click="handelSelctItem(index, item)">
        <p>
          <span>{{ item | dateFormat }}</span>
          <br />
          <span>{{ item | daysweek }}</span>
        </p>
      </li>
    </ul>
    <div
      class="right-btn"
      @click="handleAfterDate">
      <i class="iconfont icon-after" />
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DateSelect',
  filters: {
    // 通过获取当前日期的值，从而设置该周星期数
    daysweek(date) {
      const now = moment(date).format('d')
      // console.log(typeof now)
      switch (now) {
        case '0':
          return '星期日'
          break
        case '1':
          return '星期一'
          break
        case '2':
          return '星期二'
          break
        case '3':
          return '星期三'
          break
        case '4':
          return '星期四'
          break
        case '5':
          return '星期五'
          break
        case '6':
          return '星期六'
          break
        default:
          return '日期不明'
          break
      }
    },
    dateFormat(date) {
      const idx = date.indexOf('-')
      const dates = date.substring(idx + 1)
      return dates
    }
  },
  data() {
    return {
      now: moment(),
      select: 3
    }
  },
  computed: {
    ...mapGetters({
      playDate: 'sport/getPlayDate', // 获取当前日期
      getSportListParams: 'sport/getSportListParams' // 获取调用接口所需要的参数
    }),
    // 通过获取当前日期的值，从而设置该周的值
    week() {
      // console.log(this.playDate)
      const weeks = []
      const firstDay = moment(this.now)
        .subtract(3, 'days')
        .format('YYYY-MM-DD')
      for (let i = 0; i < 7; i++) {
        weeks.push(
          moment(firstDay)
            .add(i, 'days')
            .format('YYYY-MM-DD')
        )
      }
      return weeks
    }
  },

  mounted() {},
  methods: {
    ...mapMutations({
      pushDate: 'sport/pushDate'
    }),
    // 之前的日期
    handleBeforeDate() {
      console.log(this.playDate)
      const before = moment(this.now)
        .subtract(7, 'days')
        .format('YYYY-MM-DD')
      this.now = before
      console.log(before)
      this.select = 3
      this.$emit('onBeforeDate', before)
    },
    // 之后的日期
    handleAfterDate() {
      const after = moment(this.now)
        .add(7, 'days')
        .format('YYYY-MM-DD')
      this.now = after
      console.log(after)
      this.select = 3
      this.$emit('onAfterDate', after)
    },
    // 选择日期事件
    handelSelctItem(index, item) {
      this.select = index
      this.$emit('onDateChange', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.date-list {
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 15px;
  .left-btn,
  .right-btn {
    flex: 0 1 60px;
  }
  .date-box {
    flex: 1;
    display: flex;
    .date-item {
      width: 14.28%;
      height: 60px;
      font-size: 14px;
      color: #8e8e8e;
      letter-spacing: 0;
      text-align: center;
      padding-top: 10px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      cursor: pointer;
    }
    .active {
      color: $base-color;
      border-radius: 2px;
      background-color: red;
    }
  }
  .left-btn,
  .right-btn {
    margin: 0 auto;
    text-align: center;
    line-height: 60px;
  }
}
</style>
