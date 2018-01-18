<template lang="pug">
  .row.my-4.align-items-center.justify-content-center(
    v-scroll-reveal={ reset: true }
  )
    .col-12.col-lg-8
      slot
</template>
<script>
export default {
  name: 'mpDivRow'
}
</script>
<style lang="scss" scoped>

</style>


