<template lang="pug">
  b-jumbotron(fluid, bg-variant='transparent').text-center
    template(slot='header') ¡Éxito!
    template(slot='lead') mensaje enviado
    hr.bg-light.my-4
    p Me pondré en contacto lo más pronto posible
    b-button(
      size='lg',
      variant='outline-primary',
      to='/',
      exact
    ) Vuelve a Casa
</template>
<script>
export default {
  layout: 'fullpage'
}
</script>
