<template lang="pug">
.form-group
  label(for='Textarea') Cuéntame tus planes!
  textarea#Textarea.form-control(
    v-validate="'required'",
    name='Textarea',
    data-vv-as='Mensaje',
    rows='5',
    placeholder='Podemos hacer grandes cosas juntos!',
  )
  .invalid-feedback(v-show="errors.has('Textarea')") {{ errors.first('Textarea') }}
</template>
<script>
export default {
  name: 'mpTxtArea',
  inject: ['$validator']
}
</script>

