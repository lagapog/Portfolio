<template lang="pug">
section#contact
  mpTitle(titulo='CONTACTO')
  mpDivRowContact
    b-col(cols='12', lg='6')
      p.lead.text-center.text-lg-left ¿Tienes una idea o proyecto en mente? Cuenta conmigo, 
        | Descríbeme que planeas hacer y to responderé a la brevedad. 
        | ¡No lo pienses más!
      img.rocket(src='~/assets/images/rocket.svg')
    b-col(cols='12', lg='6')
      p.lead.text-center.text-lg-left Puedes enviarme un mensaje vía WhatsApp con total confianza.
      a(href='https://api.whatsapp.com/send?phone=51992778351&text=Hola%20Luis,%20qu%C3%A9%20tal?', target='_blank')
        b-button.d-block.mx-auto.mx-lg-0.mb-4(variant='outline-primary') Enviar mensaje
      p.lead.text-center.text-lg-left ... o también puedes escribirme a mi correo personal 
        a(href='mailto:luisagapito.g@gmail.com', target='_blank') luisagapito.g@gmail.com  
      h5.orange.d-lg-none.mb-5.text-center "Lo imposible no se espera, se crea."
      h3.orange.d-none.d-lg-block.mt-lg-5 "Lo imposible no se espera, se crea."
</template>
<script>
import mpDivRowContact from '~/components/contact/DivRowContact.vue'
import mpTitle from '~/components/shared/Title.vue'

export default {
  components: { mpTitle, mpDivRowContact },
  transition: 'slide-left',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

section#contact {
  min-height: calc(100vh - 60px);
}

img.rocket {
  width: 100%;
  height: 40vh;
  margin: 7rem 0 0 0;
  animation: rocketear 4s infinite;
}
@media screen and (max-width: 768px) {
  img.rocket {
    height: 20vh;
    margin: 5rem 0 1rem 0;
  }
}
a:hover {
  text-decoration: none;
}
a {
  color: $white-color;
  &:hover {
    color: $logo-color;
  }
}
.orange{
  color: $logo-color;
}
@keyframes rocketear {
  0%{transform: translateY(0) rotate(0)}
  40%{transform: translateY(-4rem) rotate(0)}
  42%{transform: translateY(-4rem) rotate(5deg)}
  44%{transform: translateY(-4rem) rotate(-3deg)}
  46%{transform: translateY(-4rem) rotate(4deg)}
  48%{transform: translateY(-4rem) rotate(-4deg)}
  50%{transform: translateY(-4rem) rotate(5deg)}
  52%{transform: translateY(-4rem) rotate(-5deg)}
  54%{transform: translateY(-4rem) rotate(2deg)}
  56%{transform: translateY(-4rem) rotate(-3deg)}
  58%{transform: translateY(-4rem) rotate(4deg)}
  60%{transform: translateY(-4rem) rotate(0)}
  100%{transform: translateY(0) rotate(0)}
}
</style>
