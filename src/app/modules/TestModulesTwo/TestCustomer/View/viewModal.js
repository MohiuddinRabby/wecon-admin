import React, { useEffect, useState } from "react";
import IViewModal from "../../../_helper_components/_viewModal";
import { getSingleUser } from "../helper";

export default function ViewForm({ id, show, onHide }) {
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    if (id) {
      getSingleUser(id, setSingleData);
    }
  }, [id]);
  return (
    <IViewModal show={show} onHide={onHide} isShow={false} title="">
      <div className="container">
        <div className="card border-dark">
          <h5 className="card-header border-success text-center">
            Details of : {singleData?.name}
          </h5>
          <div className="card-body">
            <h6 className="card-text py-2">
              <i className="fas fa-user"></i>&nbsp;&nbsp;{singleData?.username}
            </h6>
            <h6 className="card-text py-2">
              <i className="fas fa-envelope"></i>&nbsp;&nbsp;{singleData?.email}
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
              {singleData?.company?.name} ({singleData?.company?.bs})
            </h6>
          </div>
          <div className="card-footer border-success"></div>
        </div>
      </div>
    </IViewModal>
  );
}
