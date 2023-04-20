import getters from "./getters";

const module = {
  namespaced: true,

  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: "Hola 👀, cómo estás?",
          timestamp: new Date().toLocaleTimeString(),
          channelId: 1,
          read: false,
        },
        {
          id: 2,
          author: 2,
          message: "Hi ;)",
          timestamp: new Date().toLocaleTimeString(),
          channelId: 2,
          read: false,
        },
      ],
    };
  },

  getters,
};

export default module;
