import { COMMIT_UPDATE_USERNAME } from "@/common/mutations-types";
import { getUser } from "@/api";

const module = {
  namespaced: true,

  state() {
    return {
      username: "Pepito.Perez",
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
    async updateUsername({ commit, state }, username) {
      const user = await getUser(1);
      console.log(user);

      // Hace uso de la mutación updateUsername
      commit(COMMIT_UPDATE_USERNAME, username);
      console.log("User active:", state.active);

      console.log("✅ username actualizado:", username);
    },
  },
};

export default module;
