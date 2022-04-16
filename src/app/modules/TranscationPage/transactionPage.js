import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Suspense } from "react";
import { ContentRoute, LayoutSplashScreen } from "../../../_metronic/layout";
import ViewPage from "./TestCustomer/View/viewPage";
import TransactionPageLanding from ".";
import TransactionsPageCreate from "./TestCustomer/Form/addEditForm";

export function TransactionPage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          <Redirect
            exact={true}
            from="/transactions"
            to="/transactions/transaction-user-list"
          />
        }
        <ContentRoute
          path="/transactions/transaction-user-list"
          component={TransactionPageLanding}
        />
        <ContentRoute
          path="/transactions/transactions-users-create"
          component={TransactionsPageCreate}
        />
        <ContentRoute
          path="/transactions/transactions-users-details/:id"
          component={ViewPage}
        />
      </Switch>
    </Suspense>
  );
}

export default TransactionPage;
