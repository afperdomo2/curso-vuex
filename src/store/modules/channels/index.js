const module = {
  namespaced: true,

  state() {
    return {
      channels: [
        { id: 1, name: "Canal 1", messages: [] },
        { id: 2, name: "Canal 2", messages: [] },
        { id: 3, name: "General", messages: [] },
        { id: 4, name: "Pruebas", messages: [] },
      ],
    };
  },
  getters: {
    getChannels: (state) => (search) => {
      return state.channels.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    },
    getChannelById: (state) => (channelId) => {
      return state.channels.find(
        ({ id }) => parseInt(id) === parseInt(channelId)
      );
    },
  },
};

export default module;
