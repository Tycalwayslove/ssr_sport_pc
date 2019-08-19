export default () => ({
  // 基础常量
  pageNum: 1, // 第几页
  pageSize: 10, // 一页显示
  // 数据源
  tabList: [], // tab列表
  sportList: [], // 比赛列表
  // tab 相关
  firstClassId: 0, // 一级获取个数 0 则为全部
  secondClassId: 0, // 二级获取个数
  thirdClassId: 0, // 三级获取个数
  AheadOrRear: 0 // 2 为上拉动作 1 为下拉动作 默认为0
})
