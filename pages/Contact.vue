<template lang="pug">
section#contact
  mpTitle(titulo='CONTACTO')
  mpDivRowContact.my-4
    .col-12.col-lg-6
      p.lead ¿Tienes una idea o proyecto en mente? Puedes contar conmigo, 
        | Descríbeme que planeas hacer y to responderé a la brevedad. 
        | ¡No lo pienses más!
      img.rocket(src='~/assets/images/rocket.svg')
    .col-12.col-lg-6
      mpFormContact
      small Este formulario utiliza los servicios de 
        a(href='https://formspree.io', target='_blank') formspree 
        | para enviar los datos
  mpDivRowContact.my-3
    .col-12
      h4 ... o también puedes escribirme a mi correo personal
      a(href='mailto:luisagapito.g@gmail.com', target='_blank')
        span.form-text.text-muted luisagapito.g@gmail.com
</template>
<script>
import mpFormContact from '~/components/contact/FormContact.vue'
import mpDivRowContact from '~/components/contact/DivRowContact.vue'
import mpTitle from '~/components/shared/Title.vue'

export default {
  components: { mpFormContact, mpTitle, mpDivRowContact },
  transition: 'slide-left',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

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
.form-text.text-muted {
  display: inline-block;
}
a, .form-text.text-muted {
  margin: 1.5em 0;
  color: $button-color !important;
  &:hover {
    color: $dark-color !important;
  }
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