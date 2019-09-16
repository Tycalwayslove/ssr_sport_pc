/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-17 05:40:18
 */

export default {
    // 填充 sportList
    pushSportList(state, { params }) {
        console.log(params)
        state.sportList = params
    },
    setPlayDate(state, dates) {
        console.log(dates)
            // state.playDate = dates
    }
}