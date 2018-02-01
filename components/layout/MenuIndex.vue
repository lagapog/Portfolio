<template lang="pug">
  b-row(align-v='center', v-if='logoEnded')
    b-col.text-center(cols='12', md='4', v-for='i in indexItemsMenu', :key='i.item')
      b-button(
        size='lg',
        variant='outline-primary',
        :to='i.link'
      ) {{ i.name }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'mpMenuIndex',
  computed: mapState([
    'indexItemsMenu',
    'logoEnded'
  ])
}
</script>
<style lang="scss" scoped>
.row {
  height: calc(40vh - 20px);
}
</style>
