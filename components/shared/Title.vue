<template lang="pug">
  b-row.my-3(
    v-scroll-reveal={ duration: 1000, reset: true, viewFactor: 0.3 },
    align-v='center',
    align-h='center',
  )
    b-col.text-center(cols='12')
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
  letter-spacing: .5rem;
  color: $logo-color;
}
</style>
