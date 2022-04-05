import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import IForm from "../../../_helper_components/_form";
import { createNewUser } from "../helper";
import Form from "./form";

const initData = {
  userName: "",
  userEmail: "",
  userAddress: "",
};

export default function TresuaryDepositForm() {
  const [objProps, setObjprops] = useState({});
  const location = useLocation();
  const params = useParams();

  //SingleData to view
  const [singleData, setSingleData] = useState("");

  useEffect(() => {
    if (params?.id) {
      //   signleIDapi for edit(params?.id, setSingleData);
    }
  }, [params]);

  const saveHandler = async (values) => {
    if (values) {
      if (params?.id) {
        // eslint-disable-next-line no-unused-vars
        const payload = {
          userName: values?.userName,
          userEmail: values?.userEmail,
          userAddress: values?.userAddress,
        };
        // edit api
        // apiName(payload);
      } else {
        const payload = {
          userName: values?.userName,
          userEmail: values?.userEmail,
          userAddress: values?.userAddress,
        };
        // save api
        createNewUser(payload);
      }
    } else {
      //
    }
  };

  return (
    <IForm title="Create New User (Test)" getProps={setObjprops}>
      <Form
        {...objProps}
        initData={params?.id ? singleData : initData}
        saveHandler={saveHandler}
        setSingleData={setSingleData}
        state={location?.state}
        isEdit={params?.id || false}
      />
    </IForm>
  );
}
