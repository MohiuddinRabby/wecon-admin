import React from "react";
import IViewModal from "../../../_helper_components/_viewModal";
export default function TestUserModal({
  id,
  show,
  onHide,
  rowDto,
  singleData,
}) {
  return (
    <div>
      <IViewModal
        show={show}
        onHide={onHide}
        title={"Sales Invoice iBOS"}
        btnText="Close"
      >
        <div className="row sales-invoice-model m-0">
          <div className="col-lg-2 offset-10 d-flex justify-content-end"></div>
          <div className="col-lg-12 p-0">
            <div className="title text-center mt-5">
              <div className="top">
                <h1>Government of the People's Republic of Bangladesh</h1>
                <h5>National Board of Revenue</h5>
              </div>

              <div className="buttom">
                <h5 className="mt-3">Tax Challan</h5>
                <p>[See Clauses (C) and (f) of Sub-Rule (1) of Rule 40]</p>
                <p>Name of Registered Person:</p>
                <p>BIN of Registered Person:</p>
                <p>Challan Issuing Address:</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer_buttom  mt-5 ">
          <div className="col-lg-12 p-0">
            <div
              className="d-flex justify-content-between px-5"
              style={{ marginTop: "30px" }}
            >
              <div>
                <p>Name of organization Officer-in-charge:</p>
                <p>Designation:</p>
              </div>
              <p>Signature: </p>
              <p>Driver Signature</p>
              <p>Receiver Signature</p>
            </div>
            <p className="mt-1">
              <strong>
                * Applicable to the supplier made to the withholding entity only
                and in that case it will be used as combined tax invoice cum
                withholding ccrtifisate.
              </strong>
            </p>
            <p className="mt-1">
              <strong>* Value except all kinds of Tax.</strong>
            </p>
          </div>
        </div>
      </IViewModal>
    </div>
  );
}
