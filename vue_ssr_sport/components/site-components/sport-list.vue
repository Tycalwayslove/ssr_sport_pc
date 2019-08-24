<!--
 * @Descripttion: 
 * @Author: tangyouchao
 * @Date: 2019-08-24 08:55:09
 * @LastEditors: tangyouchao
 * @LastEditTime: 2019-08-24 10:40:08
 -->
<template>
  <div>
    <div v-if="sportList.length > 0">
      <sport-list-item></sport-list-item>
    </div>
    <no-data v-else></no-data>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NoData from '@/components/base-components/no-data'
import SportListItem from '@/components/site-components/sport-list-item'
export default {
  name: 'SportList',
  components: { NoData, SportListItem },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      sportList: 'sport/getterSportList'
    })
  },
  mounted() {
    console.log(222)
    console.log(this.sportList)
  },
  methods: {}
}
</script>
