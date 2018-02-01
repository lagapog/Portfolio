<template lang="pug">
form(
  @submit.prevent="validateBeforeSubmit",
  action='https://formspree.io/agapo.91@gmail.com',
  method='POST'
)
  mpInputGroup(
    v-for='c in contactInputs',
    :key='c.item',
    :ci='c'
  )
  mpTxtArea
  input(type='hidden', name='_next' value='//www.luisagapito.com/thanks')
  button.btn.my-4(type='submit') Enviar
</template>
<script>
import mpInputGroup from '~/components/contact/InputGroup.vue'
import mpTxtArea from '~/components/contact/TxtArea.vue'
import { mapState } from 'vuex'

export default {
  name: 'mpFormContact',
  components: { mpInputGroup, mpTxtArea },
  computed: mapState([ 'contactInputs' ]),
  props: [ 'ci' ],
  methods: {
    validateBeforeSubmit () {
      const _this = this
      this.$validator.validateAll().then((result) => {
        if (result) {
          _this.$el.submit()
          return
        }
        _this.$notify({
          group: 'auth',
          title: 'Rayos, algo salió mal',
          text: 'Necesitas correjir los errores del Formulario'
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/variables';

button.btn {
  background-color: $primary-color;
  border: 1px solid $button-color; 
  color: $button-color;
  transition: all .3s;

  &:hover {
    background-color: $button-color;
    color: $primary-color;
    border-color: transparent;
  }
}
</style>
