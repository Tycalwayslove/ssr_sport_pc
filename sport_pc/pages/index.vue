<template>
  <div class="pc-container">
    <div class="nav">
      <section class="nav-list">
        <div class="nav-item">
          <div class="item-hot">
            <a href="#">
              <span>熱門</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    <div class="setion">
      <div class="cal-wrapper">
        <div class="date-select">
          時間選擇
        </div>
        <div class="team-select">
          球隊選擇
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="scss" coped>
.pc-container {
  height: 100%;
  position: relative;
  display: flex;
  overflow-x: hidden;
  background-color:blue;
  .nav {
    flex-basis: 200px;
    flex-grow:1;
    flex-shrink: 0;
    .nav-list {
      float: left;
      background: red;
    }
  }

  .setion {
    position: relative;
    flex-grow:1;
    flex-shrink:1;
    width: 1025px;
    height: 100%;
    overflow: hidden;
    background: green;
  }
}
</style>
