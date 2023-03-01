export const state = () => ({
  isActive:false,
  sideBarOpen: false,
})

export const mutations = {
  active(state) {
    state.isActive = true
  },
  toggleSidebar (state) {
    state.sideBarOpen = !state.sideBarOpen
  },
  disabled(state) {
    state.isActive = false
  }
}
export const getters = {
  sideBarOpen: state => {
    return state.sideBarOpen
  },
  
}
export const actions = {
  active(context) {
    context.commit('active')
  },
  disabled(context) {
    context.commit('disabled')
  },
  toggleSidebar(context) {
    context.commit('toggleSidebar')
  },
}