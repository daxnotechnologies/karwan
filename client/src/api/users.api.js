import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const addUser = async (formData) => {
  try {
    const { data } = await API.patch("/add-user", formData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (id, formData) => {
  try {
    const res = await API.patch(`/update-user/${id}`, formData);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (id) => {
  // console.log(data);
  try {
    const res = await API.delete(`/delete-user/${id}`);
    return res;
  } catch (error) {
    return error.message;
  }
};

const userService = {
  addUser,
  updateUser,
  deleteUser,
};

export default userService;
