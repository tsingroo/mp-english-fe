<template>
 <div>
    <swiper id="banner" indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <swiper-item>
        <image @click="gotoPhonics()" mode="scaleToFill" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/34630639.jpg" style="width: 100%;height: 168px;"/>
      </swiper-item>
      <swiper-item>
        <image @click="gotoSubjects()" mode="scaleToFill" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/36305421.jpg" style="width: 100%;height: 168px;"/>
      </swiper-item>
    </swiper>
    <br><br><br>
    
    <div id="main_module" style="display:flex;flex-direction: row;">
      <div class="main-item" @click="gotoPhonics()">
        <image mode="aspectFit" src="http://ph1cnfby2.bkt.clouddn.com/18-10-28/2849001.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
      <div class="main-item" @click="gotoSubjects()">
        <image mode="aspectFit" src="http://ph1cnfby2.bkt.clouddn.com/18-10-28/17007276.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
      <div class="main-item">
        <image mode="aspectFit" src="http://ph1cnfby2.bkt.clouddn.com/18-10-28/20524568.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
    </div>
    <br><br>

    <div>
      <ul class="newslist">
        <li class="news-item">
          * 2019.01月.第四版，未排期，广大用户可向Shirley妈妈或者Shirley爸爸提建议
        </li>
        <li class="news-item">
          * 2018.12月.预计发布第三版，加入手势写字，机器智能识别功能
        </li>
        <li class="news-item">
          * 2018.11月.预计发布第二版，加入新的主题课模块
        </li>
      </ul>
    </div>
 </div>
</template>
<script>
export default {
  onShareAppMessage () {
    return {
      title: '快来跟我一起学习英语吧！',
      path: 'pages/index/main'
    }
  },
  methods: {
    gotoPhonics () {
      wx.navigateTo({
        url: '/pages/lessons/main'
      })
    },
    gotoSubjects () {
      wx.navigateTo({
        url: '/pages/subjects/main'
      })
    }
  }
}
</script>
<style scoped>
.main-item {
  width: 200rpx;
  height: 200rpx;
  margin: 30rpx 25rpx 30rpx 25rpx;
}
.newslist {
  margin: 30rpx 0 0 30rpx;
}
.news-item {
  margin-bottom: 10rpx;
  font-size:32rpx;
  color: #222;
}
</style>
