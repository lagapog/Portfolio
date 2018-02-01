<template lang="pug">
  b-col.text-center(cols='2', xl='1')
    a(:href='link', target='_blank')
      icon(:name='name')
</template>
<script>
export default {
  name: 'mpIconSocialNet',
  props: {
    link: String,
    name: String
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

a {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -10px;
    background-color: $logo-color;
    transform: scaleX(0);
    box-sizing: border-box;
    transition: 0.3s ease-in-out;
  }
  &:hover:before {
    transform: scaleX(1);
  }
  svg.fa-icon {
    color: $white-color;
    width: auto;
    height: 2rem;
    transition: 0.3s ease-in-out;
    &:hover {
      color: $logo-color;
    }
  }
}
</style>
