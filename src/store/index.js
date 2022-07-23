import { createStore } from 'vuex'

export default createStore({
  state: {
    width: document.documentElement.clientWidth,
    smallScreen: false,
    showBurger: false
  },
  mutations: {
    getDimensions(state) {
      state.width = document.documentElement.clientWidth;
    }
  },
  actions: {
    setSmallScreen({ state, commit }) {
      commit('getDimensions')
      if (state.width < 768) {
        state.smallScreen = true
      } else {
        state.smallScreen = false
      }
    },

    addShowBurger({ state }) {
      let app = document.querySelector('#app')
      let popup = document.querySelector('.popup__wrapper')
      if (!state.showBurger) {
        state.showBurger = true
        app.style.height = popup.clientHeight + 'px'
      }
    },

    removeShowBurger({ state }) {
      let app = document.querySelector('#app')
      if (state.showBurger) {
        state.showBurger = false
        app.style.height = 'auto'
      }
    }
  },
})
