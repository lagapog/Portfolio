<template lang="pug">
  b-form-group(
    :label='ci.label'
    :label-for='ci.name'
  )
    b-input-group
      b-input-group-prepend     
        b-btn(variant='outline-primary', disabled)
          icon(:name='ci.icon')
      input.form-control(
        :id='ci.name'
        v-validate='ci.validate',
        type="text",
        :name='ci.name',
        :data-vv-as='ci.alias',
        :placeholder='ci.placeholder',
      )
      b-form-invalid-feedback(:force-show="errors.has(ci.name)") {{ errors.first(ci.name) }}  
</template>
<script>
export default {
  name: 'mpInputGroup',
  props: [ 'ci' ],
  inject: ['$validator']
}
</script>
