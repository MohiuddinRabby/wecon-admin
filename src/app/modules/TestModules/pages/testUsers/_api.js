import Axios from "axios";
import { toast } from "react-toastify";
// get all user list
export const getUserList = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/users`);

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
// get single user details
export const getSingleUser = async (setter, userID) => {
  try {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
// delete user from list
export const deleteUser = async (userID) => {
  try {
    const res = await Axios.delete(
      `https://jsonplaceholder.typicode.com/users/${userID}`
    );
    if (res.status === 200) {
      toast.success("deleted succesfully");
    }
  } catch (error) {
    console.log(error.message);
  }
};
// create new user
export const createNewUser = async (data) => {
  try {
    const res = await Axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );
    if (res.status === 201) {
      toast.success("User created succesfully");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
