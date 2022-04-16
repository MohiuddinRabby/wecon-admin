import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ICustomCard from "../../../_helper_components/_custom_Card";
import { getSingleUser, senderDetails } from "../helper";
import transactionData from "./transactionData";

export default function ViewPage() {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [senderInfo, setSenderInfo] = useState();
  // eslint-disable-next-line no-unused-vars
  const [transactionDetails, setTransactionDetails] = useState(transactionData);
  useEffect(() => {
    if (id) {
      getSingleUser(id, setSingleData);
    }
  }, [id]);
  useEffect(() => {
    senderDetails(setSenderInfo);
  }, []);
  const history = useHistory();
  return (
    <ICustomCard title="Transaction Details">
      <div>
        <button className="btn btn-primary btn-sm" onClick={history.goBack}>
          Back
        </button>
        <h5 className="card-header border-success text-center">
          Details of : {singleData?.name}
        </h5>

        <div className="card-footer border-success"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Sender Info</h5>
              {senderInfo?.results?.map((transactionInfo) => (
                <div className="card">
                  <div className="card-body text-center">
                    <img
                      src={transactionInfo?.picture?.large}
                      alt="user avator"
                      className="img-fluid rounded-circle w-25 mb-3"
                    />
                    <h6>
                      {transactionInfo?.name?.title}
                      {transactionInfo?.name?.first}
                      {transactionInfo?.name?.last}
                    </h6>
                    <h6>
                      Sender Location: {transactionInfo?.location?.city},
                      {transactionInfo?.location?.street?.name},
                      {transactionInfo?.location?.street?.number}
                    </h6>
                    <h6>
                      Sending time:
                      {transactionInfo?.location?.timezone?.offset}-
                      {transactionInfo?.location?.timezone?.description}
                    </h6>
                    <h6>Email: {transactionInfo?.email}</h6>
                    <h6>Phone: {transactionInfo?.phone}</h6>
                    <h6>Transaction ID: {transactionInfo?.id?.value}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              <h5>Receiver Info</h5>
              <div className="card">
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
                    <i className="fas fa-phone"></i>&nbsp;&nbsp;
                    {singleData?.phone}
                  </h6>
                  <h6 className="card-text py-2">
                    <i className="fas fa-address-card"></i>&nbsp;&nbsp;
                    {singleData?.address?.suite},{singleData?.address?.street},
                    {singleData?.address?.city}({singleData?.address?.zipcode})
                  </h6>
                  <h6 className="card-text py-2">
                    <i className="fas fa-wifi"></i>&nbsp;&nbsp;
                    {singleData?.website}
                  </h6>
                  <h6 className="card-text py-2">
                    <i className="fas fa-briefcase"></i>&nbsp;&nbsp;
                    {singleData?.company?.name} (BS: {singleData?.company?.bs}
                    &nbsp;&nbsp; CatchPhrase: {singleData?.company?.catchPhrase}
                    )
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <h4>Transaction Details</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">caseid</th>
                    <th scope="col">branchid</th>
                    <th scope="col">accountno</th>
                    <th scope="col">transactionData</th>
                    <th scope="col">transactionID</th>
                    <th scope="col">balance</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionDetails?.map((transactionInfo) => (
                    <tr key={transactionInfo?.caseid}>
                      <th>{transactionInfo?.caseid}</th>
                      <th>{transactionInfo?.branchid}</th>
                      <td>{transactionInfo?.accountno}</td>
                      <td>{transactionInfo?.transactionData}</td>
                      <td>{transactionInfo?.transactionID}</td>
                      <td>{transactionInfo?.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ICustomCard>
  );
}
