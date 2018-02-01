<template lang="pug">
  b-form-group(
    label='¡Cuéntame tus planes!'
    label-for='Textarea'
  )
    textarea#Textarea.form-control(
      v-validate="'required'",
      name='Textarea',
      data-vv-as='Mensaje',
      rows='5',
      placeholder='Podemos hacer grandes cosas juntos!',
    )
    b-form-invalid-feedback(v-show="errors.has('Textarea')") {{ errors.first('Textarea') }}
</template>
<script>
export default {
  name: 'mpTxtArea',
  inject: ['$validator']
}
</script>

