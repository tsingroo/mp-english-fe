<template>
 <div>
    <swiper indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <swiper-item>
        <image mode="scaleToFill" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/34630639.jpg" style="width: 100%;height: 168px;"/>
      </swiper-item>
      <swiper-item>
        <image mode="scaleToFill" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/36305421.jpg" style="width: 100%;height: 168px;"/>
      </swiper-item>
    </swiper>
    
    <div style="display:flex;flex-direction: row;">
      <div class="main-item">
        <image mode="aspectFit" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/85472759.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
      <div class="main-item">
        <image mode="aspectFit" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/50769816.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
      <div class="main-item">
        <image mode="aspectFit" src="http://ph1cnfby2.bkt.clouddn.com/18-10-27/80547463.jpg" style="width:200rpx;height:200rpx;"/>
      </div>
    </div>
 </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.main-item {
  width: 200rpx;
  height: 200rpx;
  margin: 10rpx 25rpx 10rpx 25rpx;
}
</style>
