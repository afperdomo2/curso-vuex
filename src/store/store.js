const store = {
  profile: {
    username: "",
  },
  contacts: [
    { id: 1, name: "pedro" },
    { id: 2, name: "Juan" },
    { id: 3, name: "Maria" },
  ],
  channels: [
    {
      id: 1,
      name: "canal 1",
      messages: [1, 3, 4],
    },
    {
      id: 2,
      name: "canal 2",
      messages: [2, 5],
    },
  ],
  messages: [
    {
      id: 1,
      msg: "hola mundo 22222",
      author: 2,
    },
    {
      id: 2,
      msg: "hola :D",
      author: 2,
    },
    {
      id: 3,
      msg: "pruebas",
      author: 3,
    },
    {
      id: 4,
      msg: "cómo estas? ",
      author: 2,
    },
    {
      id: 5,
      msg: "bien y tu",
      author: 1,
    },
  ],
};
