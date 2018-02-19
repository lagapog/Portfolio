<template lang="pug">
  b-row.redes(
    v-scroll-reveal={ duration: 1200, reset: true, viewFactor: 0.3 },
    align-h='center'
  )
    b-col.text-center.text-lg-left(cols='12', offset-lg='2')
      h3.my-3 Puedes encontrarme en:
    mpIconSocialNet(
      v-for='s in socials',
      :key='s.item',
      :link='s.link',
      :name='s.name'
    )
</template>
<script>
import mpIconSocialNet from '~/components/about/IconSocialNet.vue'
import { mapState } from 'vuex'

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
