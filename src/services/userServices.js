import apiConfig from "./apiConfig";

const getUsers = () => {
  const response = apiConfig().get("/users ");

  return response;
};

const getUserById = (id) => {
  const response = apiConfig().get(`/users/${id}`);

  return response;
};

const createUser = (user) => {
  const response = apiConfig().post("/users", user);

  return response;
};

const updateUser = (user, id) => {
  const response = apiConfig().put(`/users/${id}`, user);

  return response;
};

const deleteUser = (id) => {
  const response = apiConfig().delete(`/users/${id}`);

  return response;
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
