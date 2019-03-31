<template>
  <div class="wrap">
    {{log}}
  </div>
</template>

<style scoped>
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

<script>
import Bus from '../mixins/bus.js'
export default {
  data() {
    return {
      log: 'aaaaaaaaa'
    }
  },
  methods: {},
  created() {
    const _this = this
    Bus.$on('testlog', function(data) {
      _this.log = data
    })
  }
}
</script>
