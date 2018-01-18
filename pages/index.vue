<template lang="pug">
  #index
    mpLogoMov(v-if='firstTime', @finished='toEndAnimation')
    mpLogo(v-else)
    transition(name='blink')
      mpHello(v-if='logoEnded')
</template>

<script>
import mpLogoMov from '~/components/index/LogoMov.vue'
import mpLogo from '~/components/index/Logo.vue'
import mpHello from '~/components/index/Hello.vue'
import { mapState } from 'vuex'

export default {
  transition (to, from) {
    if (!from) return 'slide-down'
    switch (from.name) {
      case 'About':
        return 'slide-left'
      case 'Projects':
        return 'slide-down'
      case 'Blogs':
        return 'slide-down'
      case 'Contact':
        return 'slide-right'
    }
  },
  beforeCreate () {
    this.$store.commit('setIndexMenu')
  },
  components: { mpLogoMov, mpLogo, mpHello },
  computed: mapState(['logoEnded', 'firstTime']),
  methods: {
    toEndAnimation () {
      this.$store.commit('logoFinished')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/main';

#index {
  height: 60vh;
}
</style>
