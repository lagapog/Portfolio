<template lang="pug">
  footer.row
    p.w-100.text-center.text-md-right © {{ year }}  Todos los derechos reservados | 
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
    margin-bottom: 0;
    color: $white-color;
    font-size: .9rem;
    span {
      color: $logo-color;
    }
  }
}
</style>
