/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 20:50:06
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-20 20:59:03
 */
import fetch from './fetch'
export const getSportList = (data) =>
  fetch({
    url: '/GetPlayData/GetPalyForType',
    methods: 'GET',
    data
  })
