<template>
  <div>
    <div class="lessons-header">课程列表</div>
    <ul class="lessons">
      <li v-for="lesson in lessons" v-bind:key="lesson.ID" class="lesson-item">
        <img :src="lesson.ImageUrl" :alt="lesson.LessonName">
        <span>{{lesson.LessonName}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { Http } from '../../utils/httpTool'

export default {
  data() {
    return {
      lessons: []
    }
  },
  created() {
    Http.get('getLessons').then((resp)=> {
      this.lessons = resp.data.lessons
    }, (err)=> {})
  }
}
</script>
<style scoped>
.lessons-header {

}
.lessons {

}
.lesson-item {

}
</style>

