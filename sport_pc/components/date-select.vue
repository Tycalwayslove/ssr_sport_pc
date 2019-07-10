<template>
  <ul class='date-box'>
    <li
      :class="[isActive ? 'active' : '', 'date-item']"
      v-for="(item,index) in week"
      :key='index'
    >{{item}}</li>
  </ul>
</template>
<script>
import moment from 'moment'
export default {
  name: 'dateSelect',
  data() {
    return {
      now: moment(),
      isActive: false
    }
  },
  computed: {
    // 通过获取当前日期的值，从而设置该周的值
    week(now) {
      const weeks = []
      const firstDay = moment(now)
        .subtract(3, 'days')
        .format('YYYY-MM-DD')
      for (let i = 0; i < 7; i++) {
        weeks.push(
          moment(firstDay)
            .add(i, 'days')
            .format('YYYY-MM-DD')
        )
      }
      console.log(weeks)
      return weeks
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.date-box {
  display: flex;
  .date-item {
    width: 14.28%;
    height: 100%;
    font-size: 16px;
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
</style>
