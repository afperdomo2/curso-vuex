import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      username: "Andrés.PeA",
    };
  },

  getters: {
    firstName: (state) => {
      return state.username.split(".")[0];
    },
    lastName: (state) => (separator) => {
      return state.username.split(".")[1].split("").join(separator);
    },
  },
});

export default store;
