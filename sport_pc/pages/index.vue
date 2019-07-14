<template>
  <div class="pc-container">
    <div class="nav">
      <section class="nav-list">
        <div class="nav-type">
          <!-- 热门 -->
          <div class="item-hot">
            <a
              href="#hot"
              class='nav-item'
            >
              <span>热门</span>
            </a>
          </div>
          <!-- 分类- 篮球 -->
          <div class="game-items">
            <v-card>
              <v-list subheader>
                <v-subheader>篮球</v-subheader>
                <v-list-tile
                  v-for="(item,index) in items1"
                  :key="item.title"
                  @click='handleTagClick(index)'
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </div>
          <!-- 分类- 足球 -->
          <div class="game-items">
            <v-card>
              <v-list subheader>
                <v-subheader>足球</v-subheader>
                <v-list-tile
                  v-for="(item,index) in items2"
                  :key="item.title"
                  @click='handleTagClick(index)'
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </div>
          <!-- 分类- 篮球 -->
          <div class="game-items">
            <v-card>
              <v-list subheader>
                <v-subheader>其他</v-subheader>
                <v-list-tile
                  v-for="(item,index) in items3"
                  :key="item.title"
                  @click='handleTagClick(index)'
                >
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </div>
        </div>
      </section>
    </div>
    <div class="setion">
      <!-- 上面的筛选 -->
      <div class="cal-wrapper">
        <date-select
          :list="sportList"
          @onDateChange="handleDateChange"
        ></date-select>
      </div>
      <!-- 下面展示的列表 -->
      <div class="list-box">
        <div class="days-list">
          <sport-list
            :list='sportList'
            v-if="Count>0"
          ></sport-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import format from 'date-fns/format'
import sportList from '@/components/sport-list'
import dateSelect from '@/components/date-select'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: { sportList, dateSelect },
  data() {
    return {
      items1: [
        {
          id: 0,
          title: 'NBA',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 1,
          title: 'WNBA',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 2,
          title: '篮球其他',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 3,
          title: '篮球世界',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        }
      ],
      items2: [
        {
          id: 0,
          title: 'NBA',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 1,
          title: 'WNBA',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 2,
          title: '篮球其他',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 3,
          title: '篮球世界',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        }
      ],
      items3: [
        {
          id: 0,
          title: 'NBA',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 1,
          title: 'WNBA',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 2,
          title: '篮球其他',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        },
        {
          id: 3,
          title: '篮球世界',
          avatar: 'https://mat1.gtimg.com/sports/sportapp/liansai_logo/NBA.png'
        }
      ],
      menu1: false,
      menu2: false
    }
  },
  // 全局store 入口
  fetch({ app, $axios }) {
    const nowDate = moment().format('YYYY-MM-DD')
    const params = {
      pageNum: 1,
      pageSize: 10,
      firstClassId: 0,
      secondClassId: 0,
      thirdClassId: 0,
      playDate: nowDate,
      AheadOrRear: 0
    }
    console.log(params)
    return $axios
      .get('/api/GetPlayData/GetPalyForType', { params })
      .then((res) => {
        console.log(res)
        const result = res.data
        if (result.Status === 1) {
          const list = result.Data.List
          const obj = result.Data
          const key = moment(obj.Date).format('YYYY-MM-DD')
          const value = obj.List
          const newObj = {}
          const portDate = moment(obj.Date).format('YYYY-MM-DD')
          const Count = obj.Count
          // console.log(portDate)
          if (list.length > 0) {
            if (typeof obj === 'object' && obj instanceof Object) {
              if (!obj.hasOwnProperty('Date')) {
                console.log(
                  '数据合适有问题，请检查返回的对象中是否含有Date 字段'
                )
                return
              }
              if (!obj.hasOwnProperty('List')) {
                console.log(
                  '数据合适有问题，请检查返回的对象中是否含有List 字段'
                )
                return
              }
              newObj[key] = value
            } else {
              console.log('请输入一个对象')
            }
          }
          console.log(newObj)
          app.store.commit('sport/pushSportList', newObj)
          app.store.commit('sport/pushParams', params)
          app.store.commit('sport/pushDate', portDate)
          app.store.commit('sport/pushCount', Count)
        }
      })
  },
  asyncData({ $axios, context, params }) {
    return $axios
      .get('/api/GetTabs/GetReMen?fNum=3&sNum=4&tNum=5')
      .then((res) => {
        console.log(res.data.Data)
        // return {
        //   list: res.Data.List
        // }
      })
  },
  computed: {
    ...mapGetters({
      sportList: 'sport/getSportList', // 获取sportList 列表
      Count: 'sport/getCount', // 获取接口返回的数据数量
      PlayDate: 'sport/getPlayDate', // 获取vuex中存储的当前时间
      sportListParams: 'sport/getSportListParams' // 获取vuex中存储的当前时间
    }),
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
    }
  },
  mounted() {
    console.log(this.sportList)
  },
  methods: {
    ...mapMutations({
      pushSportList: 'sport/pushSportList', //填充数据
      changeCount: 'sport/changeCount', // 改变接口放回的数量
      changePageNum: 'sport/changePageNum',
      changePlayDate: 'sport/changePlayDate',
    }),
    handleTagClick(index) {
      console.log(index)
    },
    //日期改变
    handleDateChange(date) {
      console.log(date)
      this.requestData(2)
    },
    // 格式化返回的数据对象
    parseData(data) {
      const obj = data
      // 判断是否为对象
      if (typeof obj === 'object' && obj instanceof Object) {
        if (!obj.hasOwnProperty('Date')) {
          console.log('数据合适有问题，请检查返回的对象中是否含有Date 字段')
          return
        }
        if (!obj.hasOwnProperty('List')) {
          console.log('数据合适有问题，请检查返回的对象中是否含有List 字段')
          return
        }
        const key = moment(obj.Date).format('YYYY-MM-DD')
        const value = obj.List
        const newObj = {}
        newObj[key] = value
        return newObj
      } else {
        console.log('请输入一个对象')
      }
    },
    // 请求数据
    requestData(num) {
      this.$axios
        .get('/api/GetPlayData/GetPalyForType', {
          params: this.sportListParams
        })
        .then((res) => {
          const result = res.data
          console.log(result)
          const data = this.parseData(result.Data)
          console.log(data)
          this.changeCount(data.Count)
          if (result.Data.Count === 10) {
            this.changePageNum('1')
          } else {
            this.changePageNum('2')
          }
          if (num === 1) {
            if (this.SportList.length === 0) {
              this.pushSportList(data)
            } else {
              let list = { ...this.SportList }
              console.log(list)
              for (const item in data) {
                if (list.hasOwnProperty(item)) {
                  list[item].push(data[item])
                } else {
                  this.$set(this.list, item, data[item])
                  list = Object.assign(list, data)
                }
              }
              console.log(list)
              this.pushSportList(list)
            }
          } else if (num === 2) {
            console.log(data)
            this.pushSportList(data)
          }
          this.changePlayDate(moment(result.Data.Date).format('YYYY-MM-DD'))
        })
    }
  }
}
</script>
<style lang="scss" coped>
.pc-container {
  display: flex;
  position: relative;
  height: calc(100vh - 64px);
  padding-top: 24px;
  box-sizing: border-box;
  overflow: hidden;
  color: #000;
  font-size: 12px;
  .nav {
    flex-basis: 200px;
    flex-grow: 1;
    flex-shrink: 0;
    background: #fff;
    overflow: auto;
    .nav-list {
      .item-hot {
        margin-top: 15px;
      }
      .nav-item {
        display: block;
        position: relative;
        font-size: 16px;
        color: #313131;
        width: 100%;
        height: 48px;
        line-height: 48px;
        padding-left: 32px;
        overflow: hidden;
      }
      // & :hover {
      //   color: #fff;
      //   background: $base_color;
      // }
    }
  }

  .setion {
    position: relative;
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
    width: 1025px;
    height: 100%;
    margin-left: 30px;
    background: #fff;
    .date-select {
      height: 100px;
    }
  }
}
</style>
