import { reactive } from "vue";

const store = reactive({
  username: "Felipe",

  setUsername(newUsername) {
    this.username = newUsername;
  }
});

export default store;
