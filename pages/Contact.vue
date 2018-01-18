<template lang="pug">
#contact
  mpTitle(titulo='CONTACTO')
  mpDivRow
    h3 ¿Tienes una idea o proyecto en mente? Puedes contar conmigo
    img.lightbulb(src='~/assets/images/lightbulb.gif')
  mpDivRow
    mpFormContact
    .col-12
      small Este formulario utiliza los servicios de 
        a(href='https://formspree.io', target='_blank') formspree 
        | para enviar los datos
  mpDivRow
    h4 ... o también puedes escribirme a mi correo personal
    a(href='mailto:luisagapito.g@gmail.com', target='_blank')
      span.form-text.text-muted luisagapito.g@gmail.com
</template>
<script>
import mpFormContact from '~/components/contact/FormContact.vue'
import mpTitle from '~/components/shared/Title.vue'
import mpDivRow from '~/components/shared/DivRow.vue'

export default {
  components: { mpFormContact, mpTitle, mpDivRow },
  transition: 'slide-left',
  mounted () {
    this.$store.commit('logoFinished')
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

.lightbulb {
  width: auto;
  height: 10rem;
  display: block;
  margin: 0 auto;
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
h3 {
  border-bottom: 5px double $button-color;
  border-top: 5px double $button-color;
}
</style>