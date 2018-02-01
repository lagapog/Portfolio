<template lang="pug">
  b-container(fluid)
    no-ssr
      notifications(group='auth',
        position='bottom right',
        classes='vue-notification error'
      )
    nuxt
    transition(name='menu-fade', mode='out-in')
      component(:is='menuView')
    transition(name='blink')
      mpFooter(v-if='logoEnded')
</template>
<script>
import mpMenuIndex from '~/components/layout/MenuIndex.vue'
import mpHomeButton from '~/components/shared/HomeButton.vue'
import mpFooter from '~/components/layout/Footer.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  created () {
    this.setMenu()
  },
  beforeUpdate () {
    this.setMenu()
  },
  components: { mpMenuIndex, mpHomeButton, mpFooter },
  computed: mapState([
    'logoEnded',
    'menuView'
  ]),
  methods: {
    ...mapMutations([
      'setIndexMenu',
      'setNotIndexMenu'
    ]),
    setMenu () {
      if (this.$route.fullPath === '/') this.setIndexMenu()
      else this.setNotIndexMenu()
    }
  }
}
</script>
