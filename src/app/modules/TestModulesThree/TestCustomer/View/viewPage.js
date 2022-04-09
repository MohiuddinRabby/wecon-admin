import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ICustomCard from "../../../_helper_components/_custom_Card";
import { getSingleUser } from "../helper";

export default function ViewPage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    if (id) {
      getSingleUser(id, setSingleData);
    }
  }, [id]);
  const history = useHistory();
  console.log("single user details", singleData);
  return (
    <ICustomCard title="Single Customer Details (Test)">
      <div>
        <button className="btn btn-primary btn-sm" onClick={history.goBack}>
          Back
        </button>
        <h5 className="card-header border-success text-center">
          Details of : {singleData?.name}
        </h5>
        <div className="card-body">
          <h6 className="card-text py-2">
            <i className="fas fa-user"></i>&nbsp;&nbsp;
            {singleData?.username}
          </h6>
          <h6 className="card-text py-2">
            <i className="fas fa-envelope"></i>&nbsp;&nbsp;
            {singleData?.email}
          </h6>
          <h6 className="card-text py-2">
            <i class="fas fa-phone"></i>&nbsp;&nbsp;{singleData?.phone}
          </h6>
          <h6 className="card-text py-2">
            <i class="fas fa-address-card"></i>&nbsp;&nbsp;
            {singleData?.address?.suite},{singleData?.address?.street},
            {singleData?.address?.city}({singleData?.address?.zipcode})
          </h6>
          <h6 className="card-text py-2">
            <i className="fas fa-wifi"></i>&nbsp;&nbsp;{singleData?.website}
          </h6>
          <h6 className="card-text py-2">
            <i className="fas fa-briefcase"></i>&nbsp;&nbsp;
            {singleData?.company?.name} (BS: {singleData?.company?.bs}
            &nbsp;&nbsp; CatchPhrase: {singleData?.company?.catchPhrase})
          </h6>
        </div>
        <div className="card-footer border-success"></div>
      </div>
    </ICustomCard>
  );
}
