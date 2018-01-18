const mutations = {
  logoFinished (state) {
    state.logoEnded = true
  },
  changeStTime (state) {
    state.firstTime = false
  },
  setIndexMenu (state) {
    state.menuView = 'mpMenuIndex'
  },
  setNotIndexMenu (state) {
    state.menuView = 'mpHomeButton'
  },
  showsMenu (state) {
    state.showMenu = true
  }
}

export default mutations
