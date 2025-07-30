import API from "./axios";

export const getCategories = async () => {
  const res = await API.get("/categories");
  return res;
};

export const getProviders = async () => {
  const res = await API.get("/providers");
  return res;
};

export const getSlots = async () => {
  const res = await API.get("/slots");
  return res;
};



