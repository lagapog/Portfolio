<template lang="pug">
.form-group
  label(:for='ci.name') {{ ci.label }}
  .input-group
    .input-group-prepend
      span.input-group-text(:id='ci.icon')
        icon(:name='ci.icon')
    input.form-control(
      :id='ci.name'
      v-validate='ci.validate',
      type="text",
      :name='ci.name',
      :data-vv-as='ci.alias',
      :placeholder='ci.placeholder',
      :aria-describedby='ci.icon'
    )
    .invalid-feedback(v-show="errors.has(ci.name)") {{ errors.first(ci.name) }}  
</template>
<script>
export default {
  name: 'mpInputGroup',
  props: [ 'ci' ],
  inject: ['$validator']
}
</script>
<style lang="scss" scoped>

</style>
