<template lang="pug">
.col-10.col-sm-8.col-md-6.col-lg-4.text-center.my-4(
  v-scroll-reveal={ reset: true }
)
  .tarjeta
    .tarjeta-image(:style="{ 'background-image': 'url('+ proj.image + ')'}")
    .tarjeta-cuerpo.d-flex.justify-content-center.flex-column
      h5.text-center.my-2 {{ proj.name }}
      p.text-center.m-2 {{ proj.description }}
      .tarjeta-tags
        small.badge.badge-pill(v-for='t in proj.tags') {{ t }}
  a.tarjeta-boton(:href='proj.link', target='_blank') 
    icon(name='link') 
</template>
<script>
export default {
  name: 'mpProject',
  props: [ 'proj' ]
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';
* {
  transition: all .3s;
}
.tarjeta {
  height: 15em;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
  position: relative;
  &-image {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
  &-cuerpo{
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 100%;
  }
  &-tags {
    display: flex;
    justify-content: space-around;
    margin: .5em 0;
    small {
      background-color: transparent;
      border: 1px solid $button-color;
      color: $button-color;
      font-size: 1rem;
    }
  }
  &-boton svg{
    height: 3rem;
    width: auto;
    padding: .6rem;
    color: $button-color;
    border: 1px solid $button-color;
    border-radius: 50%;
    margin-top: 1rem;
    &:hover {
      // text-decoration: none;
      color: $primary-color;
      background-color: $button-color;
      border-color: transparent;
    }
  }
  &:hover &-cuerpo{
    bottom: 0;
  }
}
@media screen and (max-width: 992px) {
  .tarjeta {
    height: 19em;
    &-image {
      height: 60%;
    }
    &-cuerpo{
      height: 40%;
      width: 100%;
      position: initial;
      background-color: transparent;
      bottom: 100%;
    }
  }
}
</style>
