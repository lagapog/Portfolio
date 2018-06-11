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
  name: 'mpLogoMov',
  mounted () {
    const x = document.getElementById('shadow')
    const vm = this
    x.addEventListener('animationend', () => {
      vm.$emit('finished')
    })
  },
  beforeDestroy () {
    this.$store.commit('changeStTime')
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.logo{
  width: 60%;
  height: 66.7%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &-media {
    width: 20px;
    height: 120px;
    transform: skewX(-30deg);
    position: relative;
    &.squareA {
      animation: movingA .8s ease .8s forwards;
    }
    &.squareB {
      animation: movingB .8s ease .8s forwards;
    }
    &-squareA, &-squareB {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $logo-color;
      transform: scaleY(0);
      animation: typing .7s ease .3s forwards;
      &-shadow{
        width: 100%;
        height: 100%;
        background-color: $logo-shadow-color;
        position: absolute;
        transform: scale(0)
      }
    }
    &-squareA-shadow{
      transform-origin: bottom;
      animation: shadowA .6s ease 1.5s forwards;
    }
    &-squareB-shadow{
      transform-origin: top;
      animation: shadowB .6s ease 1.5s forwards;
    }
  }
}
@keyframes typing {
  50%{transform: scaleY(1.2);}
  60%{transform: scaleY(.75);}
  75%{transform: scaleY(1.1);}
  90%{transform: scaleY(.9);}
  100%{transform: scaleY(1);}
}
@keyframes movingA {
  0%{transform: skewX(-30deg) translate(0);}
  35%{transform: skewX(-30deg) translate(-25px,-26px);}
  65%{transform: skewX(-30deg) translate(-15px,-18px);}
  85%{transform: skewX(-30deg) translate(-20px,-22px);}
  100%{transform: skewX(-30deg) translate(-18px,-20px);}
}
@keyframes movingB {
  0%{transform: skewX(-30deg) translate(0);}
  35%{transform: skewX(-30deg) translate(25px,26px);}
  65%{transform: skewX(-30deg) translate(15px,18px);}
  85%{transform: skewX(-30deg) translate(20px,22px);}
  100%{transform: skewX(-30deg) translate(18px,20px);}
}
@keyframes shadowA {
  0%{transform: scale(1) rotateZ(0);bottom:0px;left:0px}
  35%{transform: scale(1) rotateZ(90deg);}
  65%{transform: scale(1) rotateZ(85deg);}
  85%{transform: scale(1) rotateZ(90deg);}
  90%{transform: scale(1) rotateZ(88deg);}
  100%{transform: scale(1) rotateZ(90deg);bottom: 10px;left:-8px}
}
@keyframes shadowB {
  0%{transform: scale(1) skew(0) rotateZ(0);}
  35%{transform: scale(1) skew(30deg) rotateZ(-9deg);}
  65%{transform: scale(1) skew(30deg) rotateZ(3deg);}
  85%{transform: scale(1) skew(30deg) rotateZ(-5deg);}
  95%{transform: scale(1) skew(30deg) rotateZ(0deg);}
  100%{transform: scale(1) skew(30deg) rotateZ(-2deg);}
}
</style>
 