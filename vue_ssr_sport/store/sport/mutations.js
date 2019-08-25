/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-25 10:51:59
 */

export default {
  // 填充 sportList
  pushSportList(state, { sportList }) {
    console.log(11)
    console.log(sportList)
    state.sportList = sportList
  },
  setPlayDate(state, dates) {
    console.log(dates)
    // state.playDate = dates
  }
}
