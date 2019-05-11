<template>
 <div>
    <swiper id="banner" indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <swiper-item>
        <image @click="gotoPhonics()" mode="scaleToFill" src="http://img.cdn.xingyunzhuji.cn/18-10-27/34630639.jpg" style="width: 100%;height: 168px;"/>
      </swiper-item>
      <swiper-item>
        <image @click="gotoSubjects()" mode="scaleToFill" src="http://img.cdn.xingyunzhuji.cn/18-10-27/36305421.jpg" style="width: 100%;height: 168px;"/>
      </swiper-item>
    </swiper>
    <br><br><br>
    
    <div id="main_module" style="display:flex;flex-direction: row;">
      <div class="main-item" @click="gotoPhonics()">
        <image mode="aspectFit" src="http://img.cdn.xingyunzhuji.cn/18-10-28/2849001.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
      <div class="main-item" @click="gotoSubjects()">
        <image mode="aspectFit" src="http://img.cdn.xingyunzhuji.cn/18-10-28/17007276.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
      <div class="main-item" @click="gotoCustome()">
        <div style="">自定义</div>
      </div>
    </div>
    <br><br>

    <div>
      <ul class="newslist">
        <li class="news-item">
          * 2019.05.更新点击自定义，在页面中输入句子，点击play即可播放😀
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
    },
    gotoCustome () {
      wx.navigateTo({
        url: '/pages/custome/main'
      })
    }
  }
}
</script>
<style scoped>
#main_module {
  display: flex;
  justify-content: space-around;
}

.main-item {
  width: 200rpx;
  height: 200rpx;
  display: flex;
  align-items: center;
  justify-content: center;
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
