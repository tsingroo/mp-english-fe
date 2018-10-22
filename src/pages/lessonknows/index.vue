<template>
  <div>
    Knowledge Page
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
  created () {
    Http.get('getKnowledges')
  }
}
</script>
<style scoped>

</style>
