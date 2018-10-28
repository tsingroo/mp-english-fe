<template>
  <div>
    <ul>
      <li v-for="know in subKnows" :key="know.ID">
        <img :src="know.ImageURL">
        <div @click="play(know.Question)">Q: {{know.Question}}</div>
        <div @click="play(know.Answer)">A: {{know.Answer}}</div>
      </li>
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
    play (sentence) {
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

</style>
