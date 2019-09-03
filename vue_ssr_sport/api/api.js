/*
 * @Descripttion:
 * @Author: tangyouchao
 * @Date: 2019-08-09 20:50:06
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-02 21:21:00
 */
import fetch from './fetch'
export const getSportList = (params) => {
  console.log(params)
  fetch({
    url: '/GetPlayData/GetPalyForTimeSlot',
    method: 'GET',
    params
  })
}
