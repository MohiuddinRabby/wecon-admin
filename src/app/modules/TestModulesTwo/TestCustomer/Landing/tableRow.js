import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import ICustomCard from "../../../_helper_components/_custom_Card";
import { useHistory } from "react-router-dom";
import { getUserList } from "../helper";
import IView from "../../../_helper_components/_iView";
import { toast } from "react-toastify";
export function TableRow() {
  const [userList, setUserList] = useState();
  useEffect(() => {
    getUserList(setUserList);
  }, []);
  const history = useHistory();
  const pushData = () => {
    history.push({
      pathname: "/test-modules/test-users-create",
    });
  };
  const deleteUserFromList = (id) => {
    const newNotes = userList?.filter((note) => note?.id !== id);
    setUserList(newNotes);
    toast.success("user deleted succesfully");
  };
  return (
    <ICustomCard
      title="Customer List (Test)"
      renderProps={() => (
        <button className="btn btn-primary" onClick={pushData}>
          Create new user
        </button>
      )}
    >
      <Formik>
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
                <tr key={userInfo?.id}>
                  <th>{userInfo?.id}</th>
                  <td>{userInfo?.name}</td>
                  <td>{userInfo?.username}</td>
                  <td>{userInfo?.email}</td>
                  <td>{userInfo?.phone}</td>
                  <td className="d-flex justify-content-around">
                    <IView
                      clickHandler={() => {
                        history.push(
                          `/test-modules/test-user-list/${userInfo?.id}`
                        );
                      }}
                    />
                    <i
                      className="fas fa-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteUserFromList(userInfo?.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Formik>
    </ICustomCard>
  );
}
