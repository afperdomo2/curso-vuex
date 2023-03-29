import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      username: "Andrés Per",
    };
  },

  getters: {
    firstName: (state) => (separator) => {
      return state.username.split("").join(separator);
    },
  },

  mutations: {
    updateUsername(state, newUsername) {
      state.username = newUsername;
    },
  },
});

export default store;
