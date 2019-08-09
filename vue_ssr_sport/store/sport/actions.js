import { getTab } from '@/api/api'
export default {
  getTabs({ commit }) {
    getTab().then(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
