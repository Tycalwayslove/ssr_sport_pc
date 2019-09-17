/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-18 05:42:01
 */

export default {
    // 填充 sportList
    pushSportList(state, { params }) {
        console.log(params)
        state.sportList = params
    },
    // 修改playDate
    setPlayDate(state, dates) {
        console.log(dates)
            // state.playDate = dates
    },
    // 修改anchorIndex
    setAnchorIndex(state, index) {
        console.log(index)
        state.anchorIndex = index
    }
}