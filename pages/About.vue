<template lang="pug">
section#about
  mpTitle(titulo='ACERCA')
  mpDivRowAbout
    h1.text-center Luis Agapito, Desarrollador
    div.d-flex.justify-content-center
      h5.mr-3 Lima, Perú
      img.flag(src='~/assets/images/flag.jpg')
  mpDivRowAbout
    h3.my-3.text-center.text-lg-left Te cuento...
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
  mpSkills()
  mpSocialNet
</template>
<script>
import mpSkills from '~/components/about/Skills.vue'
import mpDivRowAbout from '~/components/about/DivRowAbout.vue'
import mpSocialNet from '~/components/about/SocialNet.vue'
import mpTitle from '~/components/shared/Title.vue'

export default {
  components: { mpSkills, mpSocialNet, mpTitle, mpDivRowAbout },
  transition: 'slide-right',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';
.flag {
  height: 1.2rem;
  width: auto;
  display: block
}
.text-auxiliar {
  text-decoration: none;
  color: $button-color;
  font-weight: bold;
}
</style>

