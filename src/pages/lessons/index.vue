<template>
  <div>
    <div class="lessons-header">Phonics 自然拼读</div>
    <ul class="lessons">
      <li v-for="lesson in lessons" v-bind:key="lesson.ID" class="lesson-item" @click="goInLesson(lesson.ID)">
        <img class="less-image" :src="lesson.ImageUrl" :alt="lesson.LessonName">
        <!-- <span>{{lesson.LessonName}}</span> -->
      </li>
    </ul>
  </div>
</template>
<script>
import { Http } from '../../utils/httpTool'

export default {
  data () {
    return {
      lessons: []
    }
  },
  created () {
    Http.get('getLessons', null, (resp) => {
      this.lessons = resp.data
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
    goInLesson (lessId) {
      wx.navigateTo({
        url: '/pages/lessonknows/main?lessId=' + lessId
      })
    }
  }
}
</script>
<style scoped>
.lessons-header {
  margin: 30rpx;
  font-size: 60rpx;
  color: green;
  text-align: center;
}
.lessons {

}
.lesson-item {

}
.less-image {
  width: 650rpx;
  height: 400rpx;
  margin: 10rpx 50rpx;
}
</style>

