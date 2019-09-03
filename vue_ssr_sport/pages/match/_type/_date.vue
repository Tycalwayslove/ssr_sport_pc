<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-09-02 20:22:37
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-09-02 20:44:11
 -->
<template>
  <div>date</div>
</template>
<script>
export default {
  name: 'DateIndex',
  data() {
    return {}
  },
  created() {
    this.getRouter()
  },
  methods: {
    getRouter() {
      console.log(this.$route.params)
    }
  }
}
</script>
