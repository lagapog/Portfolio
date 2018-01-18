<template lang="pug">
  .row.align-items-center(v-if='logoEnded')
    .col-12.col-md-4.text-center(v-for='i in indexItemsMenu', :key='i.item')
      nuxt-link.btn.btn-lg.btn-outline-primary(
        type='button',
        tag='button',
        :to='i.link'
      ) {{ i.name }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'mpMenuIndex',
  computed: mapState([
    'indexItemsMenu',
    'logoEnded'
  ])
}
</script>
<style lang="scss" scoped>
@import '~assets/css/main';

.row {
  height: calc(40vh - 20px);
}
.col-12.col-md-3 {
  height: 50px;
}
.btn.btn-outline-primary {
  position: relative;
  overflow: hidden;
  color: $secondary-color;
  border-color: $secondary-color;
  transition: 0.3s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: $secondary-color;
    transform: translateX(-101%);
    box-sizing: border-box;
    transition: 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover{
    color: $primary-color;
    box-shadow: 2px 2px $dark-color;
    background: transparent;
    &:before {
      transform: translateX(0);
    }
  }
  &:active {
    animation: clickear .3s;
  }
}
</style>
