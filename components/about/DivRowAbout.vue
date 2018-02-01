<template lang="pug">
  .row.my-4.align-items-center.justify-content-center(
    v-scroll-reveal={ reset: true }
  )
    .col-12
      slot
</template>
<script>
export default {
  name: 'mpDivRowAbout'
}
</script>


