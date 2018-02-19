<template lang="pug">
no-ssr
  b-row.my-4(align-v='center', align-h='center')
    b-col.text-center.text-lg-left(cols='12', offset-lg='2')
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
