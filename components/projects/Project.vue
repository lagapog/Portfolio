<template lang="pug">
.col-10.col-sm-8.col-md-6.col-lg-4.my-4
  .tarjeta
    .tarjeta-image
      img(:src="require(`~/assets/images/${proj.image}`)")
    .tarjeta-cuerpo
      h5.tarjeta-titulo {{ proj.name }}
      p.tarjeta-texto {{ proj.description }}
      .tarjeta-tags
        small(v-for='t in proj.tags') {{ t }}
      a.tarjeta-boton(:href='proj.link', target='_blank') Ir al proyecto 
        icon(name='arrow-right') 
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
  background-color: #fff;
  overflow: hidden;
  &-image {
    height: 75%;
    width: 100%;
    overflow: hidden;
    img {
      height: 14em;
      width: auto;
      transform: scale(1.1);
    }
  }
  &-cuerpo{
    height: 25%;
    padding-left: .5em;
  }
  &-texto {
    margin-bottom: 0;
  }
  &-tags {
    display: flex;
    justify-content: space-around;
    margin: .5em 0;
    small {
      background-color: $button-color;
      text-align: center;
      font-size: .6em;
      padding: 0 1em;
      border-radius: 1.5em;
    }
  }
  &-boton {
   color: $button-color;
   text-decoration: none;
   &:hover {
     text-decoration: none;
     color: $dark-color;
   }
  }
  &:hover &-image{
    height: 50%;
    img {
      filter: blur(2px);
      transform: scale(1.3);
    }
  }
  &:hover &-cuerpo{
    height: 50%;
  }
  &:hover{
    transform: translate(5px, -5px);
    box-shadow: -5px 5px 2px $dark-color;
  }
}
</style>
