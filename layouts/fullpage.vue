<template lang="pug">
    .container.thanks.align-items-center.justify-content-center
      nuxt
</template>
<script>
export default {
}
</script>

<style lang="scss">
@import '~assets/css/main';

body {
  background: radial-gradient($primary-light-color 25%, $primary-color 75%);
  overflow: hidden;
}
.container.thanks {
  display: flex;
  height: 100vh;
}
</style>
