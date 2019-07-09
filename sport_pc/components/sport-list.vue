<template>
  <div class="sport-list">
    <div class="sport-list-el">
      <ul class="game-list">
        <li class="group-info">{{ value | DateFormat }}</li>
        <li class="game-item px-bottom">
          <a class="detail-url">
            <div class="game-time">03：00</div>
            <div class="game-detial">
              <div class="a-name">
                <span>挪威</span>
                <img src="https://inews.gtimg.com/newsapp_ls/0/374617056/0.jpg"
                     alt="">
              </div>
              <div class="a-goal">0</div>
              <div class="game-name">
                <div class="status-content">
                  <p>女足世界杯1/4决赛</p>
                  <p>已结束</p>
                </div>
              </div>

              <div class="b-goal">4</div>
              <div class="b-name">
                <img src="https://inews.gtimg.com/newsapp_ls/0/374617056/0.jpg"
                     alt="">
                <span>挪威</span>
              </div>
            </div>
            <div class="game-post">
              <v-button>集锦</v-button>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SportList',
  components: {},
  filters: {
    DateFormat(value) {
      // const arr = value.split('-')
      // return `${arr[0]}年${arr[1]}月${arr[2]}日`
    }
  },
  props: {
    list: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      data: null
    }
  },
  computed: mapGetters({
    // sportList: 'sport/getSportList', // 赛事列表
    // sportListParams: 'sport/getSportListParams'
  })
}
</script>

<style lang="scss" scoped>
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
      flex-basis: 130px;
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
        width: 120px;
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
          margin-right:15px;
        }
        & img {
          height: 36px;
        }
      }
      .a-goal {
        width: 30px;
        text-align: center;
      }
      .game-name {
        width: 120px;
        text-align:center;
      }
      .b-goal {
        width: 30px;
        text-align: center;
      }
      .a-name{
        justify-content: flex-end;
      }
      .b-name {
        justify-content: flex-start;
        & img{
          margin-right:15px;
        }
     
      }
    }
    .game-post {
      flex: 0 1 130px;
    }
  }
}
</style>
