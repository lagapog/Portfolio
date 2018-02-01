<template lang="pug">
  .row.my-3.align-items-center.justify-content-center(
    v-scroll-reveal={ reset: true, viewFactor: 0.3 }
  )
    .col-12.text-center
      h2 {{ titulo }}
</template>
<script>
export default {
  name: 'mpTitle',
  props: ['titulo']
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

h2 {
  letter-spacing: .5em;
  color: $button-color;
}
</style>
