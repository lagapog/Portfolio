<template lang="pug">
section#about
  mpTitle(titulo='ACERCA')
  mpDivRowAbout
    img.profile(src='~/assets/images/profile.jpg')
  mpDivRowAbout
    h1.text-center Luis Agapito, Desarrollador
    div.d-flex.justify-content-center
      h5.mr-3 Lima, Perú
      img.flag(src='~/assets/images/flag.jpg')
  mpDivRowAbout
    h3.my-3.text-center.text-lg-left Te cuento...
    p.text-justify Mi nombre es Luis Agapito y soy un desarrollador. Disfruto de 
      span.text-auxiliar resolver problemas 
      | y  practicar el 
      span.text-auxiliar aprendizaje continuo
      | . Por eso amo lo que hago.
    p.text-justify Actualmente estoy cursando el segundo año de la carrera 
      | de Computación e Informática en el 
      a.text-auxiliar(href='https://www.cibertec.edu.pe/', target='_blank') Instituto Cibertec 
      | y soy un suscriptor activo en la plataforma virtual de aprendizaje 
      a.text-auxiliar(href='https://platzi.com', target='_blank') Platzi.
    p.text-justify En mis tiempos libres, me gusta salir a las calles y  
      | practicar fotografía. Dan Brown, Richard Dawkins y Stephen Hawking 
      | son de mis autores favoritos.
  mpSkills
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
}
.profile {
  height: 12rem;
  width: auto;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  padding: 2px;
  border: 2px solid $logo-color;
}
.text-auxiliar {
  text-decoration: none;
  color: $logo-color;
  font-weight: bold;
}
</style>

