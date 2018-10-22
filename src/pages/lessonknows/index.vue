<template>
  <div></div>
</template>
<script>
import { Http } from '../../utils/httpTool'

export default {
  data() {
    return {
      knows: []
    }
  },
  created() {
    Http.get('getKnowledges').then((resp) => {
      this.knows = resp.data.knows
    }, (err) => {})
  }
}
</script>
<style lang="scss" scoped>

</style>
