<template lang="pug">
  .jumbotron.jumbotron-fluid.text-center
    .container
      h1.display-4 Mensaje enviado satisfactoriamente
      p.lead Me pondré en contacto lo más pronto posible
      hr.my-4
      p.lead
        nuxt-link.btn.btn-lg.btn-outline-primary(
        type='button',
        tag='button',
        to='/',
        exact
      ) Vuelve a Casa
</template>
<script>
export default {
  layout: 'fullpage'
}
</script>
<style lang="scss" scoped>
@import '~assets/css/main';

.jumbotron.jumbotron-fluid{
  background: transparent;
  color: $dark-color;
}
.btn.btn-outline-primary {
  position: relative;
  overflow: hidden;
  color: $button-color;
  border-color: $button-color;
  transition: 0.3s ease-in-out;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: $button-color;
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
