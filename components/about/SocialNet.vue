<template lang="pug">
  .row.justify-content-center.redes(
    v-scroll-reveal={ reset: true }
  )
    .col-12.text-lg-center
      h3.my-3 Puedes encontrarme en:
    mpIconSocialNet(
      v-for='s in socials',
      :key='s.item',
      :link='s.link',
      :name='s.name'
    )
</template>
<script>
import { mapState } from 'vuex'
import mpIconSocialNet from '~/components/about/IconSocialNet.vue'

export default {
  name: 'mpSocialNet',
  components: { mpIconSocialNet },
  computed: mapState([ 'socials' ])
}
</script>
<style lang="scss" scoped>
.redes {
  height: 25vh;
}
</style>
