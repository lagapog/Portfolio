<template lang="pug">
  .button-fixed
    b-button.rounded-circle(
      size='lg',
      variant='outline-primary',
      :to='homeItemButton.link',
      exact
    )
      icon(:name='homeItemButton.name')
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'mpHomeButton',
  computed: mapState(['homeItemButton'])
}
</script>
<style lang="scss" scoped>
.button-fixed {
  position: fixed;
  bottom: 30px;
  right: 5vw;
}
</style>
