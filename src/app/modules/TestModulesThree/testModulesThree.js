import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Suspense } from "react";
import TestUsersCreate from "./TestCustomer/Form/addEditForm";
import { ContentRoute, LayoutSplashScreen } from "../../../_metronic/layout";
import TestModuleThreeLanding from ".";
import ViewPage from "./TestCustomer/View/viewPage";

export function TestModulesTwo() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from="/test-modules-three"
            to="/test-modules-three/test-user-list"
          />
        }
        <ContentRoute
          path="/test-modules-three/test-user-list"
          component={TestModuleThreeLanding}
        />
        <ContentRoute
          path="/test-modules-three/test-users-create"
          component={TestUsersCreate}
        />{" "}
        <ContentRoute
          path="/test-modules-three/singleUserDetails/:id"
          component={ViewPage}
        />
      </Switch>
    </Suspense>
  );
}

export default TestModulesTwo;
