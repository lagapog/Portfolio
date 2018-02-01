<template lang="pug">
  .row.my-4.align-items-start.justify-content-center(
    v-scroll-reveal={ reset: true }
  )
    slot
</template>
<script>
export default {
  name: 'mpDivRowContact'
}
</script>


