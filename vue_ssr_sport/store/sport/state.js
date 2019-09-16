/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 21:24:15
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-17 05:38:24
 */
import moment from 'moment'
export default () => ({
    // 基础常量
    pageNum: 1, // 第几页
    pageSize: 10, // 一页显示
    // 数据源
    tabList: [], // tab列表
    nextPlayDate: [], // navbar 中得数据列表
    sportList: {}, // 比赛数据
    // tab 相关
    firstClassId: 0, // 一级获取个数 0 则为全部
    secondClassId: 0, // 二级获取个数
    thirdClassId: 0, // 三级获取个数
    currentState: '1', // 三级获取个数
    days: 7, // 获取多少天的数据
    daysAheadOrRear: 1, // (1为往后查days天 ，-1为往前查days天)
    AheadOrRear: 0, // 2 为上拉动作 1 为下拉动作 默认为0
    // playDate: '2018-09-30' // 当前日期
    playDate: moment().format('YYYY-MM-DD') // 当前日期
})