<template lang="pug">
  b-form(
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
    b-button.my-4(variant='outline-primary', type='submit') Enviar
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
