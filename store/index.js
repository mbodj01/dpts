export const state = () => ({
  breadcrumbs: [],
  actions: [],
})

export const getters = {
  getBreadcrumbs(state) {
    return state.breadcrumbs
  },
  getActions(state) {
    return state.actions
  },
}

export const mutations = {
  setBreadcrumbs(state, value) {
    state.breadcrumbs = value
  },
  setActions(state, value) {
    state.actions = value
  },
}
