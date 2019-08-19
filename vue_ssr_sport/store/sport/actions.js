/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-20 05:51:32
 */
import { getSportList } from '@/api/api'
export default {
  /**
   * @name: 赛事列表接口
   * @msg: 获取赛事列表
   * @param playDate:指定日期 时分秒不用你指定我在后台获取服务器当前时间以判断 比赛进程
   * @param firstClassId:一级类编号（ID） 0则不指定
   * @param secondClassId:二级类编号（ID）0则不指定
   * @param thirdClassId:三级类编号（ID）0则不指定
   * @param pageNum:页码
   * @param pageSize:页大小
   * @param aheadOrRear:2为上翻最近有比赛的日期 1为下翻最近有比赛的日期 0为当天
   * @param isEnd: 0:全部赛事，1:进行中赛事或即将进行的近期赛事，2:已结束赛事
   * @return:
   */
  getSportList({ commit }, paramas) {
    console.log('参数为')
    console.log(paramas)
    getSportList(paramas).then(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
