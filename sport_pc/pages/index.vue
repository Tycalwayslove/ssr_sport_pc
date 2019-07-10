<template>
  <div class="pc-container">
    <div class="nav">
      <section class="nav-list">
        <div class="nav-type">
          <!-- 热门 -->
          <div class="item-hot">
            <a href="#hot"
               class='nav-item'>
              <span>热门</span>
            </a>
          </div>
          <!-- 分类- 篮球 -->
          <div class="game-items">
            <v-card>
              <v-list subheader>
                <v-subheader>篮球</v-subheader>
                <v-list-tile v-for="(item,index) in items1"
                             :key="item.title"
                             @click='handleTagClick(index)'>
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
                <v-list-tile v-for="(item,index) in items2"
                             :key="item.title"
                             @click='handleTagClick(index)'>
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
                <v-list-tile v-for="(item,index) in items3"
                             :key="item.title"
                             @click='handleTagClick(index)'>
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
      <date-select></date-select>
      </div>
      <!-- 下面展示的列表 -->
      <div class="list-box">
        <div class="days-list">
         <sport-list></sport-list>
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
export default {
  components: {sportList,dateSelect},
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
      items4: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ],
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
    },
    computedDateFormattedDatefns() {
      return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
    }
  },
  methods: {
    handleTagClick(index) {
      console.log(index)
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
    background:#fff;
    .date-select {
      height: 100px;
    }
  }
}
</style>
