<template>
  <div class="sport-list">
    <div class="sport-list-el">
      <ul
        v-for="(key, value, index) in list"
        :key="index"
        class="game-list"
      >
        <li class="group-info">
          <span />
          {{ PlayDate | formatDateWeek }}
        </li>
        <li
          v-for="sportItem in key"
          :Key="sportItem.playId"
          class="game-item px-bottom"
        >
          <a
            class="detail-url"
            :href="sportItem.liveAddress1"
          >
            <div class="game-time">
              {{ sportItem.playTimeStart | formatDate }}
            </div>
            <div class="game-detial">
              <div class="a-name">
                <span>{{ sportItem.teamAName }}</span>
                <img
                  src="https://inews.gtimg.com/newsapp_ls/0/374617056/0.jpg"
                  alt
                />
              </div>
              <div class="a-goal">{{ sportItem.teamAPoint }}</div>
              <div class="game-name">
                <div class="status-content">
                  <p>女足世界杯1/4决赛</p>
                  <p>{{ sportItem.competitionStatus }}</p>
                </div>
              </div>

              <div class="b-goal">{{ sportItem.teamBPoint }}</div>
              <div class="b-name">
                <img
                  src="https://inews.gtimg.com/newsapp_ls/0/374617056/0.jpg"
                  alt
                >
                <span>{{ sportItem.teamBName }}</span>
              </div>
            </div>
            <div class="game-post">
              <v-btn color="success">集锦</v-btn>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'SportList',
  components: {},
  props: {
    list: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  filters: {
    formatDate(value) {
      const formatDates = moment(value).format('HH:mm')
      return formatDates
    },
    formatDateWeek(value) {
      const weeks = moment(value).weekday()
      console.log(weeks)
      let weeksNumber
      switch (weeks) {
        case 0:
          weeksNumber = '星期天'
          break
        case 1:
          weeksNumber = '星期一'
          break
        case 2:
          weeksNumber = '星期二'
          break
        case 3:
          weeksNumber = '星期三'
          break
        case 4:
          weeksNumber = '星期四'
          break
        case 5:
          weeksNumber = '星期五'
          break
        case 6:
          weeksNumber = '星期六'
          break

        default:
          weeksNumber = '默认日期'
          break
      }
      const formatDate = moment(value).format('YYYY-MM-DD')
      const days = formatDate + ' ' + weeksNumber
      return days
    }
  },
  data() {
    return {
      data: null
    }
  },

  computed: {
    ...mapGetters({
      PlayDate: 'sport/getPlayDate' // 获取vuex中存储的当前时间
    })
  }
}
</script>

<style lang="scss" scoped>
.sport-list {
  margin-top: 15px;
}
.game-item {
  position: relative;
  margin: 0 40px;
  height: 70px;
  // line-height: 70px;
  .detail-url {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .game-time {
      flex-basis: 60px;
      flex-shrink: 1;
      flex-grow: 0;
    }
    .game-detial {
      flex: 1;
      display: flex;
      height: 100%;
      align-items: center;

      .a-name,
      .b-name {
        width: 25%;
        display: flex;

        align-items: center;
        & span {
          vertical-align: middle;
          display: inline-block;
          max-width: 110px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          text-align: right;
          margin-right: 15px;
        }
        & img {
          height: 36px;
        }
      }
      .a-goal {
        width: 8%;
        text-align: center;
      }
      .game-name {
        width: 34%;
        text-align: center;
      }
      .b-goal {
        width: 8%;
        text-align: center;
      }
      .a-name {
        justify-content: flex-end;
      }
      .b-name {
        justify-content: flex-start;
        & img {
          margin-right: 15px;
        }
      }
    }
    .game-post {
      flex: 0 1 130px;
    }
  }
}
.px-bottom {
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0;
    border: solid;
    border-width: thin 0 0 0;
    border-color: rgba(0, 0, 0, 0.12);
    bottom: 0;
  }
}
.group-info {
  padding-left: 24px;
  color: #8e8e8e;
  font-size: 16px;
  & span {
    position: relative;
    top: -2px;
    display: inline-block;
    margin-right: 10px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: $base-color;
  }
}
</style>
