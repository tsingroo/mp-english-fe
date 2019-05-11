<template>
  <div>
    <ul>
      <div v-if="subKnows == null || subKnows.length == 0">
        暂无内容，请查看其他主题，待数据录入后可正常使用
      </div>
      <div v-if="subKnows.length != 0">
        <li v-for="know in subKnows" :key="know.ID">
          <image mode="aspectFit" class="subknow-image" :src="know.ImageURL" />
          <div @click="play(know.Question)" class="sub-know-q">
            <image mode="aspectFit" class="voice-ico" src="http://img.cdn.xingyunzhuji.cn/18-10-28/1470754.jpg" />Q: {{know.Question}}?
          </div>
          <div @click="play(know.Answer)" class="sub-know-a">
            <image mode="aspectFit" class="voice-ico" src="http://img.cdn.xingyunzhuji.cn/18-10-28/1470754.jpg" />A: {{know.Answer}}.
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
import { Http } from '../../utils/httpTool'

export default {
  data () {
    return {
      subKnows: []
    }
  },
  onLoad (options) {
    Http.get('getSubjectKnowledges', {
      sub_id: options.subId
    }, (resp) => {
      this.subKnows = resp.data
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
    play (sen) {
      const sentence = encodeURIComponent(sen)
      const ydVoiceUrl = `http://dict.youdao.com/dictvoice?audio=${sentence}`
      wx.playBackgroundAudio({
        dataUrl: ydVoiceUrl,
        complete () {
        }
      })
    }
  }
}
</script>
<style scoped>
.subknow-image {
  width: 400rpx;
  height: 400rpx;
  margin: 50rpx 175rpx 0 175rpx;
}
.voice-ico {
  width: 46rpx;
  height: 46rpx;
  vertical-align: middle;
  margin: 5rpx;
}
.sub-know-q, .sub-know-a {
  font-size: 50rpx;
  margin-left: 30rpx;
}
</style>
