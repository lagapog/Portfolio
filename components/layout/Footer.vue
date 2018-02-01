<template lang="pug">
  footer
    b-row(align-h='center')
      p.text-center.mb-0 © {{ year }}  Todos los derechos reservados | 
        span Luis Agapito 
</template>
<script>
export default {
  name: 'mpFooter',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/variables';

.row {
  height: 20px;
  p {
    font-size: .9rem;
    span {
      color: $logo-color;
    }
  }
}
</style>
