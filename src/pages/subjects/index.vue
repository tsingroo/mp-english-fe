<template>
  <div>
    <div>主题课</div>
    <ul>
      <li v-for="subject in subjects" :key="subject.ID" @click="gotoSubjectKnowledge(subject.ID)">
        <img :src="subject.ImageURL">
      </li>
    </ul>
  </div>
</template>
<script>
import { Http } from '../../utils/httpTool'

export default {
  data () {
    return {
      subjects: []
    }
  },
  created () {
    Http.get('getSubjects', null, (resp) => {
      this.subjects = resp.data
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
    gotoSubjectKnowledge (subId) {
      wx.navigateTo({
        url: '/pages/subjectknowledges/main?subId=' + subId
      })
    }
  }
}
</script>
<style scoped>

</style>
