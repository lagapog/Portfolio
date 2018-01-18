<template lang="pug">
.logo
  .logo-media.squareA
    .logo-media-squareA-shadow
    .logo-media-squareA
  .logo-media.squareB
    .logo-media-squareB-shadow#shadow
    .logo-media-squareB
</template>
<script>
export default {
  name: 'mpLogo',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.logo{
  width: 60%;
  height: 66.7%;;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &-media {
    width: 20px;
    height: 120px;
    position: relative;
    &.squareA {
      transform: skewX(-30deg) translate(-18px,-20px);
    }
    &.squareB {
      transform: skewX(-30deg) translate(18px,20px);
    }
    &-squareA, &-squareB {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $dark-color;
      &-shadow{
        width: 100%;
        height: 100%;
        background-color: $gray-color;
        position: absolute;
      }
    }
    &-squareA-shadow{
      transform-origin: bottom;
      transform: scale(1) rotateZ(90deg);
      bottom: 10px;
      left:-8px
    }
    &-squareB-shadow{
      transform-origin: top;
      transform: scale(1) skew(30deg) rotateZ(-2deg);
    }
  }
}
</style>
 