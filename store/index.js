export const state = () => ({
  breacrumbs: [],
})

export const getters = {
  getBreadcrumbs(state) {
    return state.breacrumbs
  },
}

export const mutations = {
  setBreadcrumbs(state, value) {
    state.breacrumbs = value
  },
}

export const actions = {
  fetchCounter({ state }) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
}
