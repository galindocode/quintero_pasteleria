import data from "./data";
const db = {
  getAll: () => {
    return data;
  },
  getById: (id) => {
    return data.find((item) => item.id === id);
  },
};

export default db;
