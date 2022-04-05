import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserList, deleteUser } from "./_api";
export default function TestUsersList() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    getUserList(setUserList);
  }, []);
  //   delete user from list function
  const deleteUserFromList = (userID) => {
    const newNotes = userList?.filter((note) => note?.id !== userID);
    deleteUser(userID).then(() => setUserList(newNotes));
  };
  const history = useHistory();
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((userInfo) => (
            <>
              <tr>
                <th>{userInfo?.id}</th>
                <td>{userInfo?.name}</td>
                <td>{userInfo?.username}</td>
                <td>{userInfo?.email}</td>
                <td>{userInfo?.phone}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => {
                      history.push({
                        pathname: `/test-modules/test-user-list/user-details/${userInfo?.id}`,
                      });
                    }}
                  >
                    view
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUserFromList(userInfo?.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
