import { createStore } from "vuex";
import profile from "@/store/modules/profile";
import channels from "@/store/modules/channels";
import messages from "@/store/modules/messages";
import { COMMIT_SET_STATUS } from "../common/mutations-types";

const store = createStore({
  // Representa el estado inicial de la aplicación
  state() {
    return {
      status: null,
    };
  },

  /**
   * Define las propiedades calculadas basadas en el estado actual de la
   * aplicación. Los getters se comportan como propiedades de solo lectura
   * que se pueden usar en los componentes de Vue
   */
  getters: {},

  /**
   * Fefine las funciones para modificar el estado. Las mutaciones son
   * funciones síncronas que modifican el estado de la aplicación
   */
  mutations: {
    [COMMIT_SET_STATUS](state, value) {
      state.status = value;
    },
  },

  /**
   * Define las acciones que pueden ser llamadas desde los componentes para
   * interactuar con la aplicación. Las acciones pueden ser funciones asíncronas
   * que ejecutan múltiples mutaciones o interactúan con servicios externos
   */
  actions: {},

  /**
   * se utiliza para dividir la lógica de la aplicación en módulos más pequeños
   * y manejables, permitiendo una estructura más organizada y escalable para
   * el estado de la aplicación
   */
  modules: {
    profile,
    channels,
    messages,
  },
});

export default store;
