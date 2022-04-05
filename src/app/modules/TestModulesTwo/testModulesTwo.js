import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Suspense } from "react";
import TestUsersCreate from "./TestCustomer/Form/addEditForm";
import { ContentRoute, LayoutSplashScreen } from "../../../_metronic/layout";
import { TestUserTable } from "./TestCustomer/Landing/tableHeader";

export function TestModulesTwo() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/test-modules"
            to="/test-modules/test-user-list"
          />
        }
        <ContentRoute
          path="/test-modules/test-user-list"
          component={TestUserTable}
        />

        <ContentRoute
          path="/test-modules/test-users-create"
          component={TestUsersCreate}
        />
      </Switch>
    </Suspense>
  );
}

export default TestModulesTwo;
