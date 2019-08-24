/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 20:50:06
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-24 08:02:32
 */
import fetch from './fetch'
export const getSportList = (params) =>
  fetch({
    url: '/GetPlayData/GetPalyForType',
    method: 'GET',
    params
  })
