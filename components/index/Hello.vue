<template lang="pug">
.row.justify-content-center.align-items-center
  .col-12.col-md-8.col-xl-6.content
    .content-text Hola
    ul.content-list
      li.content-list-item(v-for='g in greetings', :key='g.id') {{ g.text }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'mpHello',
  computed: mapState([ 'greetings' ])
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';
.row{
  height: 33.3%;
}
.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 2.5rem;
  color: $dark-color;
  overflow: hidden;
  line-height: 60px;
  height: 60px;
  position: relative;

  &-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 5vw;
  animation: change 12s linear 1s infinite alternate;

    &-item {
      line-height:60px;
      text-align: center;
    }
  }  
  &:before {
    content: '{';
    left: 2vw;
  }
  &:after {
    content: '}';
    right: 2vw;
  }
  &:after, &:before {
    position: absolute;
    top: 0;
    color: $secondary-color;
    font-family: monospace;
    font-size: 4rem;
    line-height: 50px;
    transition: all .3s;
  }
  &:hover:after, &:hover:before {
    font-size: 60px;
  }
}
@keyframes change {
  0%, 6.15% {transform:translate3d(0,0,0); filter: blur(0)}
  7.15% {filter: blur(.5px)}
  8.15%, 20.45% {transform:translate3d(0,-12.5%,0); filter: blur(0)}
  21.45% {filter: blur(.5px)}
  22.45%, 34.75% {transform:translate3d(0,-25%,0); filter: blur(0)}
  35.75% {filter: blur(.5px)}
  36.75%, 49.05% {transform:translate3d(0,-37.5%,0); filter: blur(0)}
  50.05% {filter: blur(.5px)}
  51.05%, 63.35% {transform:translate3d(0,-50%,0); filter: blur(0)}
  64.35% {filter: blur(.5px)}
  65.35%, 77.65% {transform:translate3d(0,-62.5%,0); filter: blur(0)}
  78.65% {filter: blur(.5px)}
  79.65%, 91.95% {transform:translate3d(0,-75%,0); filter: blur(0)}
  92.95% {filter: blur(.5px)}
  93.95%, 100% {transform:translate3d(0,-87.5%,0); filter: blur(0)}
}
</style>

