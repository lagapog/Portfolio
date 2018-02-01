<template lang="pug">
  .button-fixed
    nuxt-link.btn.btn-lg.rounded-circle(
      type='button',
      tag='button',
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
@import '~assets/css/main';

.button-fixed {
  position: fixed;
  bottom: 30px;
  right: 5vw;
}
.btn.btn-lg{
  color: $primary-color;
  background-color: $button-alpha-color;
  &:hover{
    background-color: $button-color;
  }
  &:active {
    animation: clickear .3s;
  }
}
</style>
