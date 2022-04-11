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
// get single user details by ID
export const getSingleUser = async (id, setter) => {
  try {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    toast.error(error.message);
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
// sender info
export const senderDetails = async (setter) => {
  try {
    const res = await Axios.get(`https://randomuser.me/api/`);

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    toast.error(error.message);
  }
};
