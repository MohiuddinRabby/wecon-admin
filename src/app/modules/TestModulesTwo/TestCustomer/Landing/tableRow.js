import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import ICustomCard from "../../../_helper_components/_custom_Card";
import { useHistory } from "react-router-dom";
import { getUserList } from "../helper";

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
                <>
                  <tr>
                    <th>{userInfo?.id}</th>
                    <td>{userInfo?.name}</td>
                    <td>{userInfo?.username}</td>
                    <td>{userInfo?.email}</td>
                    <td>{userInfo?.phone}</td>
                    <td className="d-flex justify-content-around">
                      <button className="btn btn-success btn-sm">view</button>
                      <button className="btn btn-danger btn-sm">delete</button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </Formik>
    </ICustomCard>
  );
}
