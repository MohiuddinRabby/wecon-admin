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
