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
          read: true,
        },
        {
          id: 2,
          author: 2,
          message: "Hi ;)",
          timestamp: new Date().toLocaleTimeString(),
          channelId: 2,
          read: false,
        },
        {
          id: 3,
          author: 2,
          message: "Este es el canal general",
          timestamp: new Date().toLocaleTimeString(),
          channelId: 3,
          read: false,
        },
        {
          id: 4,
          author: 1,
          message: "Hola canal de pruebas",
          timestamp: new Date().toLocaleTimeString(),
          channelId: 4,
          read: false,
        },
      ],
    };
  },

  getters,
};

export default module;
