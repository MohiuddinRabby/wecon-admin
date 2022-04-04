import React, { useEffect, useState } from "react";
import TestUserModal from "./testUserModal";
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
  //   get data items
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
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
              <tr key={userInfo?.id}>
                <th>{userInfo?.id}</th>
                <td>{userInfo?.name}</td>
                <td>{userInfo?.username}</td>
                <td>{userInfo?.email}</td>
                <td>{userInfo?.phone}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm mr-2"
                    onClick={handleShowModal}
                  >
                    view
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUserFromList(userInfo?.id)}
                  >
                    delete
                  </button>
                  {showModal ? (
                    <TestUserModal
                      show={showModal}
                      handleClose={handleCloseModal}
                      id={userInfo?.id}
                    ></TestUserModal>
                  ) : (
                    false
                  )}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
