import {
  COMMIT_UPDATE_USERNAME,
  COMMIT_SET_STATUS,
} from "@/common/mutations-types";
import { getUser } from "@/api";

const module = {
  /**
   * permite crear un espacio de nombres para el módulo, lo que significa
   * que todas las mutaciones, acciones y getters definidos en el módulo
   * estarán contenidos en un espacio de nombres específico.
   */
  namespaced: true,

  state() {
    return {
      username: "",
    };
  },

  getters: {
    firstName: (state) => (separator) => {
      return state.username.split("").join(separator);
    },
  },

  mutations: {
    [COMMIT_UPDATE_USERNAME](state, newUsername) {
      state.username = newUsername;
    },
  },

  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      const user = await getUser(1);

      // Hace uso de la mutación updateUsername
      commit(COMMIT_UPDATE_USERNAME, username);

      // Usar un mutación del root state
      const status = state.username ? "active" : null;
      commit(COMMIT_SET_STATUS, status, { root: true });

      console.log("✅ username actualizado:", username);
    },
  },
};

export default module;
