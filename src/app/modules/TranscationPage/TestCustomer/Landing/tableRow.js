import React, { useEffect, useRef, useState } from "react";
import ICustomCard from "../../../_helper_components/_custom_Card";
import { useHistory } from "react-router-dom";
import { getUserList } from "../helper";
import { toast } from "react-toastify";
import ConfirmDelete from "../../../_helper_components/_deleteConfirm";
export function TableRow() {
  const [userList, setUserList] = useState();
  // delete confirmation
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: "",
  });
  useEffect(() => {
    getUserList(setUserList);
  }, []);
  const history = useHistory();
  // const pushData = () => {
  //   history.push({
  //     pathname: "/test-modules-three/test-users-create",
  //   });
  // };
  const idItemRef = useRef();
  const handleDialog = (message, isLoading, itemName) => {
    setDialog({
      message,
      isLoading,
      itemName,
    });
  };
  // const deleteUserFromList = (id) => {
  //   handleDialog("Are you sure you want to delete?", true, id);
  //   idItemRef.current = id;
  // };
  const areUSureDelete = (choose) => {
    if (choose) {
      setUserList(userList.filter((p) => p.id !== idItemRef.current));
      toast.success("user deleted succesfully");
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
  // send new page to see single user details
  const sendToIDDetails = (id) => {
    history.push(`/transactions/transactions-users-details/${id}`);
  };

  return (
    <ICustomCard
      title="User Transaction List"
      // renderProps={() => (
      //   <button className="btn btn-primary" onClick={pushData}>
      //     Create new user
      //   </button>
      // )}
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">user Name</th>
            <th scope="col">email</th>
            <th scope="col">account no</th>
            <th scope="col">amount</th>
            <th scope="col">date</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {userList?.map((userInfo) => (
            <tr key={userInfo?.id}>
              <th>{userInfo?.id}</th>
              <td>{userInfo?.username}</td>
              <td>{userInfo?.email}</td>
              <td>{userInfo?.phone}</td>
              <td>5,000</td>
              <td>04.11.2022</td>
              <td className="d-flex justify-content-around">
                <i
                  className="fas fa-eye"
                  style={{ cursor: "pointer" }}
                  onClick={() => sendToIDDetails(userInfo?.id)}
                ></i>
                {/* <i
                  className="fas fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteUserFromList(userInfo?.id)}
                ></i> */}
              </td>
            </tr>
          ))}
        </tbody>
        {dialog?.isLoading && (
          <ConfirmDelete
            itemName=""
            onDialog={areUSureDelete}
            message={dialog?.message}
          />
        )}
      </table>
    </ICustomCard>
  );
}
