import React from "react";
import { Route } from "react-router-dom";
import { TestUserTable } from "./TestCustomer/Landing/tableHeader";
import ViewForm from "./TestCustomer/View/viewModal";

function TestModuleTwoLanding() {
  return (
    <>
      <Route path="/test-modules/test-user-list/:id">
        {({ history, match }) => (
          <ViewForm
            show={match != null}
            id={match && match.params.id}
            history={history}
            onHide={() => {
              history.push("/test-modules/test-user-list");
            }}
          />
        )}
      </Route>
      <TestUserTable />
    </>
  );
}

export default TestModuleTwoLanding;
