<template>
  <div class="bodyContainer">
    <div class="voiceContainer">
      <div style="margin: 20px;">
        <input type="text" v-model="sentense" placeholder="please input your sentence">
      </div>
      <button @click="playSentense()"><image mode="aspectFit" class="voice-ico" src="http://img.cdn.xingyunzhuji.cn/18-10-28/1470754.jpg" />Play</button>
    </div>

    
    <div style="text-align:center;">👇👇👇好玩推荐👇👇👇</div>
    <div style="text-align:center;">迷你ufo感应飞行器遥控悬浮玩具</div>
    
    <div style="display:flex;justifi-content: space-around;">
      <!-- <txv-video vid="q0804uhh12q" playerid="q0804uhh12q" autoplay="false"></txv-video> -->
      <video src="http://img.cdn.xingyunzhuji.cn/ufo.mp4"></video>
    </div>

    <div style="text-align:center;"><button @click="cpTbContent()">😘点我复制链接，打开淘宝看详情😘</button></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sentense: ''
    }
  },
  methods: {
    playSentense () {
      if (this.sentense === '') {
        return
      }
      const sentence = encodeURIComponent(this.sentense)
      const ydVoiceUrl = `http://dict.youdao.com/dictvoice?audio=${sentence}`
      wx.playBackgroundAudio({
        dataUrl: ydVoiceUrl,
        complete () {
        }
      })
    },
    cpTbContent () {
      const ufoTbData = `抖音同款无人机小飞机迷你ufo感应飞行器四轴悬浮飞碟玩具儿童男【包邮】
【在售价】78.00元
【券后价】68.00元
【下单链接】https://m.tb.cn/h.e2LfA0k
-----------------
复制这条信息，￥UxrQYclJsmq￥，到【手机淘宝】即可查看`
      wx.setClipboardData({
        data: ufoTbData
      })
    }
  }
}
</script>
<style scoped>
.bodyContainer {
  margin: 25rpx;
}
.voiceContainer {
  height: 460rpx;
}
.voice-ico {
  width: 46rpx;
  height: 46rpx;
  vertical-align: middle;
  margin: 5rpx;
}
</style>
