<template>
  <div class="recommend">
    <div
      v-for="(item, index) in 2"
      :key="index"
      class="recommend-item pxborder"
    >
      <div class="name left">
        <p class="sport-name">
          <span>国际冠军杯</span>
          <span>08-04 22:05</span>
        </p>
        <p class="play-name">
          <img src="https://image.24zbw.com/images/football/33.png" />
          <span>托特纳姆热刺</span>
        </p>
        <p class="play-name">
          <img src="https://image.24zbw.com/images/football/33.png" />
          <span>托特纳姆热刺</span>
        </p>
      </div>
      <div class="scrore right">
        <p>
          <span class="score-a">3</span>
          <span class="line"> - </span>
          <span class="score-b">2</span>
        </p>
      </div>
      <a href="#" target="_blank" class="opacity">
        <span>赛事详情</span>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.recommend {
  position: relative;
}
.recommend-item {
  height: 134px;
  border-bottom: 1px solid #f3f3f3;
  margin: 0 auto;
  padding: 0 30px;
  position: relative;
  .name {
    width: 178px;
    height: 125px;
    .sport-name {
      font-size: 12px;
      color: #999;
      margin: 14px 0 0 10px;
      display: block;
      & span:last-child {
        margin-left: 16px;
      }
    }
    .play-name {
      height: 35px;
      margin-top: 12px;
      display: flex;
      align-content: center;

      & img {
        width: 35px;
      }
      & span:last-child {
        font-size: 14px;
        line-height: 35px;
        color: #333;
        margin-left: 12px;
      }
    }
  }
  .scrore {
    display: flex;
    width: 92px;
    height: 100%;
    justify-content: center;
    align-items: center;
    & p {
      font-size: 20px;
      line-height: 20px;
      display: flex;
      justify-items: center;
      color: #333;
      text-align: center;
      .line {
        margin: 0 8px;
      }
    }
  }
  .opacity {
    width: 100%;
    height: 125px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(195, 25, 19, 0.5);
    filter: Alpha(opacity=50);
    transform: scale(0.9);
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }
}
</style>
