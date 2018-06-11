export default function (context) {
  if (context.route.fullPath === '/') {
    context.store.commit('setIndexMenu')
  }else {
    context.store.commit('setNotIndexMenu')
  }
}