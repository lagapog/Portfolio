<template lang="pug">
.row.my-3
  .col-12.col-md-3
    span {{ skill }}
  .col-12.col-md-9
    .progress(style='height: 1.5rem;')
      .progress-bar(
        role='progressbar',
        :style='width',
        :aria-valuenow='percent',
        aria-valuemin='0',
        aria-valuemax='100'
      )  {{ animatedPercent }}%
</div>  
</template>
<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'mpProgress',
  data () {
    return {
      currentPercent: 0,
      animatedPercent: 0
    }
  },
  props: {
    skill: { type: String, required: true },
    percent: { type: String, required: true }
  },
  mounted () {
    this.currentPercent = this.percent
  },
  computed: {
    width () {
      return `width: ${this.animatedPercent}%`
    }
  },
  watch: {
    currentPercent: function (newValue, oldValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      const tween = new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Cubic.Out)
        .to({ tweeningNumber: newValue }, 2000)
        .onUpdate(function (object) {
          vm.animatedPercent = object.tweeningNumber.toFixed(0)
        })
      tween.delay(1000)
      tween.start()

      animate()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

.progress-bar {
  background: $button-color;
  color: $dark-color;
}
</style>
