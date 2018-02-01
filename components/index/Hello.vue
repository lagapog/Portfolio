<template lang="pug">
b-row(align-h='center', align-v='center')
  b-col.text-center(cols='12')
    h1.h1 Luis Agapito - Desarrollador
  b-col.content(cols='12', md='8', xl='6')
    .content-text
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
h1.h1 {
  font-size: 1.6rem;
  font-weight: bolder;
  color: $white-color;
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
  padding-left: 0;
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
    color: $logo-color;
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
  0%, 6.15% {transform:translate3d(0,0,0);}
  8.15%, 20.45% {transform:translate3d(0,-12.5%,0);}
  22.45%, 34.75% {transform:translate3d(0,-25%,0);}
  36.75%, 49.05% {transform:translate3d(0,-37.5%,0);}
  51.05%, 63.35% {transform:translate3d(0,-50%,0);}
  65.35%, 77.65% {transform:translate3d(0,-62.5%,0);}
  79.65%, 91.95% {transform:translate3d(0,-75%,0);}
  93.95%, 100% {transform:translate3d(0,-87.5%,0);}
}
</style>

