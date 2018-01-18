<template lang="pug">
#about
  mpTitle(titulo='ACERCA')
  mpDivRow
    h1.text-center Luis Agapito, Desarrollador Web
    h5.text-center Lima, Perú
  mpDivRow
    h3.mb-4 Mis Habilidades
    mpProgress(
      v-for='s in skills',
      :key='s.item'
      :skill='s.name',
      :percent='s.percent'
    )
  mpDivRow
    h3.my-3 Te cuento...
    p.lead.text-justify Soy un desarrollador web. Me siento como pez en el agua 
      span.text-auxiliar resolviendo problemas 
      | y disfruto practicar el 
      span.text-auxiliar aprendizaje continuo
      | , es por eso que amo lo que hago.
    p.lead.text-justify Actualmente estoy cursando el segundo año de la carrera 
      | de Computación e Informática en el 
      a.text-auxiliar(href='https://www.cibertec.edu.pe/', target='_blank') Instituto Cibertec 
      | y soy un suscriptor activo en la plataforma virtual de aprendizaje 
      a.text-auxiliar(href='https://platzi.com', target='_blank') Platzi.
    p.lead.text-justify En mis tiempos libres, si no estoy enganchado con alguna 
      | serie o ánime, me gusta practicar fotografía y jugar fútbol 
      | (no al mismo tiempo, obviamente)
  mpSocialNet
</template>
<script>
import mpProgress from '~/components/about/Progress.vue'
import mpSocialNet from '~/components/about/SocialNet.vue'
import mpTitle from '~/components/shared/Title.vue'
import mpDivRow from '~/components/shared/DivRow.vue'
import { mapState } from 'vuex'

export default {
  components: { mpProgress, mpSocialNet, mpTitle, mpDivRow },
  computed: mapState([ 'skills' ]),
  transition: 'slide-right',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

.text-auxiliar {
  text-decoration: none;
  color: $button-color;
  font-weight: bold;
}
</style>

