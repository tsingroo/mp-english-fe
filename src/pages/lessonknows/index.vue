<template>
  <div>
    <div class="tooltip">点击图片可播放声音</div>
    <li v-for="knowledge in knows" v-bind:key="knowledge.ID" @click="playAudio(knowledge.Word)">
      <img :src="knowledge.ImageURL" class="knowledge-image">
      <!-- <span>{{knowledge.Word}}</span> -->
    </li>
  </div>
</template>
<script>
import { Http } from '../../utils/httpTool'

export default {
  data () {
    return {
      knows: []
    }
  },
  onLoad (options) {
    console.log(options)
    Http.get('getKnowledges', {
      lesson_id: options.lessId
    }, (resp) => {
      this.knows = resp.data
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
    playAudio (word) {
      const ydVoiceUrl = `http://dict.youdao.com/dictvoice?audio=${word}`
      console.log(ydVoiceUrl)
      wx.playBackgroundAudio({
        dataUrl: ydVoiceUrl,
        complete () {
          console.log('done')
        }
      })
    }
  }
}
</script>
<style scoped>
.tooltip {
  margin-top: 50rpx;
  text-align: center;
  font-size: 30rpx;
  color: aqua;
}
.knowledge-image {
  width: 450rpx;
  margin: 30rpx 150rpx;
}
</style>
