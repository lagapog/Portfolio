<template lang="pug">
  b-row.my-4(
    v-scroll-reveal={ duration: 1000, reset: true, viewFactor: 0.3 },
    align-v='center',
    align-h='center',
  )
    b-col(cols='12')
      slot
</template>
<script>
export default {
  name: 'mpDivRowAbout'
}
</script>


