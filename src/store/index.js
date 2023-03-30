import { createStore } from "vuex";

const store = createStore({
  // Representa el estado inicial de la aplicación
  state() {
    return {
      username: "Andrés Per",
      active: true,
    };
  },

  /**
   * Define las propiedades calculadas basadas en el estado actual de la
   * aplicación. Los getters se comportan como propiedades de solo lectura
   * que se pueden usar en los componentes de Vue
   */
  getters: {
    firstName: (state) => (separator) => {
      return state.username.split("").join(separator);
    },
  },

  /**
   * Fefine las funciones para modificar el estado. Las mutaciones son
   * funciones síncronas que modifican el estado de la aplicación
   */
  mutations: {
    updateUsername(state, newUsername) {
      state.username = newUsername;
    },
  },

  /**
   * Define las acciones que pueden ser llamadas desde los componentes para
   * interactuar con la aplicación. Las acciones pueden ser funciones asíncronas
   * que ejecutan múltiples mutaciones o interactúan con servicios externos
   */
  actions: {
    updateUsername({ commit, state }, username) {
      // Hace uso de la mutación updateUsername
      commit("updateUsername", username);
      console.log("User active:", state.active);

      console.log("✅ username actualizado:", username);
    },
  },
});

export default store;
