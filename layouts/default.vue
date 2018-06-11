<template lang="pug">
  b-container(fluid)
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
  components: { mpMenuIndex, mpHomeButton, mpFooter },
  computed: mapState([
    'logoEnded',
    'menuView'
  ]),
  middleware: 'setMenu',
  methods: {
    ...mapMutations([
      'setIndexMenu',
      'setNotIndexMenu'
    ]),
    setMenu() {
      if (this.$route.fullPath === '/') this.setIndexMenu()
      else this.setNotIndexMenu()
    }
  },
  created() {
    this.setMenu()
  }
}
</script>
