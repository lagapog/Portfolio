<template lang="pug">
  b-col.text-center.my-2(
    v-scroll-reveal={ reset: true, viewFactor: 0.4 },
    cols='12',
    md='4',
    xl='3'
  )
    vue-is-visible(event="isVisible", @isVisible="setAnimatedPercent")
      h6 {{ name }}
      vm-progress(
        type='circle',
        :stroke-width='10',
        stroke-color='#FFA13C',
        track-color='#FFA13C22',
        :percentage='animatedPercent'
      ) {{ animatedPercent }} %
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

export default {
  name: 'mpProgress',
  props: [ 'name', 'percent' ],
  data () {
    return {
      currentPercent: 0,
      animatedPercent: 0
    }
  },
  methods: {
    setAnimatedPercent () {
      this.currentPercent = this.percent
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
      tween.delay(600)
      tween.start()
      animate()
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/variables';

.vm-progress__text {
  color: $white-color;
  transform-origin: center;
  transition: all .4s;
}
.vm-progress--circle:hover .vm-progress__text{
  transform: scale(1.5) translateY(-5px);
}
</style>
