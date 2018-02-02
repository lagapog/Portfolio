<template lang="pug">
section#projects
  mpTitle(titulo='PROYECTOS')
  b-row(align-h='center')
    mpProject(v-for='p in projects', :key='p.item', :proj='p')
</template>
<script>
import mpProject from '~/components/projects/Project.vue'
import mpTitle from '~/components/shared/Title.vue'
import { mapState } from 'vuex'

export default {
  components: { mpProject, mpTitle },
  computed: mapState([ 'projects' ]),
  transition: 'slide-up',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>
<style lang="scss" scoped>
section#projects {
  // mientras no haya mas projects
  min-height: calc(100vh - 36px);
}
</style>
