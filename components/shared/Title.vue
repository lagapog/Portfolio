<template lang="pug">
  .row.my-3.align-items-center.justify-content-center(
    v-scroll-reveal={ reset: true, viewFactor: 0.3 }
  )
    .col-12.text-center
      h2
        span(
          v-for='(letter, index) in animatedTitle',
          :style="'animation-delay: ' + index + '70ms;'"
        ) {{ letter }}
</template>
<script>
export default {
  name: 'mpTitle',
  props: ['titulo'],
  computed: {
    animatedTitle () {
      return this.titulo.split('')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

h2 {
  letter-spacing: .5em;
  span {
    animation: jitter 200ms linear infinite;
    color: $button-color;
    display:inline-block
  }
}
@keyframes jitter{ 
  50%{transform:skewY(2deg) skewX(-2deg) scale(1.05);}
}
</style>
