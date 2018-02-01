<template lang="pug">
no-ssr
  .row.my-4.align-items-center.justify-content-center
    .col-12.text-center.text-lg-left
      h3.mb-4 Mis Habilidades    
    mpProgress(
      v-for='s in skills',
      :key='s.item',
      :name='s.name'
      :percent='s.percent'
    )
</template>
<script>
import mpProgress from '~/components/about/Progress.vue'
import { mapState } from 'vuex'

export default {
  name: 'mpSkills',
  components: { mpProgress },
  computed: mapState([ 'skills' ])
}
</script>
<style lang="scss">

</style>
