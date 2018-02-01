<template lang="pug">
  b-row.my-4(
    v-scroll-reveal={ reset: true }
    align-v='start',
    align-h='center'
  )
    slot
</template>
<script>
export default {
  name: 'mpDivRowContact'
}
</script>


