import { toNumber } from "@vue/shared";

const getters = {
  getMessages: (state) => (channelId) => {
    return state.messages.filter(
      (message) => message.channelId === toNumber(channelId)
    );
  },
};

export default getters;
