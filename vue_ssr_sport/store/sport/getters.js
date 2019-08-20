/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-20 20:53:06
 */
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
      thirdClassId: state.thirdClassId
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
  getPlayDate: (state) => {
    return { playDate: state.playDate }
  }
}
