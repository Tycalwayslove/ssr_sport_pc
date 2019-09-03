/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-02 21:03:43
 */
import moment from 'moment'
export default {
  /**
   * @name: 获取运动列表参数
   * @msg: .
   * @param firstClassId
   * @param secondClassId
   * @param thirdClassId
   * @return: parames
   */
  getSportTypeParames: (state) => {
    const parames = {
      firstClassId: state.firstClassId,
      secondClassId: state.secondClassId,
      thirdClassId: state.thirdClassId,
      currentState: state.currentState,
      days: state.days,
      daysAheadOrRear: state.daysAheadOrRear
    }
    return parames
  },
  /**
   * @name: 获取分页相关参数
   * @msg: 。
   * @param {Object} pageNum & pageSize
   * @return: 。
   */
  getPages: (state) => {
    const pages = {
      pageNum: state.pageNum,
      pageSize: state.pageSize
    }
    return pages
  },
  /**
   * @name: 获取日期
   * @msg: 。
   * @param {Object}
   * @return: list | Array [{date：'MM-DD',weekday:'周日'}]
   *
   */
  getPlayDate: (state) => {
    return { playDate: state.playDate }
  },
  /**
   * @name: 依据playDate 生成navbar
   * @msg: 。
   * @param {Object}
   * @return: 。
   */
  getPlayDatesList: (state) => {
    const date = state.playDate
    // const now = moment().format('YYYY-MM-DD')
    const list = []

    for (let i = 1; i < 8; i++) {
      const weekday = moment(date)
        .add(i, 'days')
        .weekday()
      const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

      const obj = {
        date: moment(date)
          .add(i, 'days')
          .format('MM-DD'),
        weekday: weekList[weekday]
      }
      list.push(obj)
    }
    return list
  },
  /**
   * @name: 获取比赛列表
   * @msg: 。
   * @param {Object}
   * @return: 。
   */
  getterSportList: (state) => {
    return state.sportList || [] // 解决如果sportList没有数据时报错得问题
  }
}
