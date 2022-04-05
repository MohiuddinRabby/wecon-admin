import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";

import { LayoutSplashScreen, ContentRoute } from "../../../../_metronic/layout";
import TestUsersCreate from "./testUsers/testUsersCreate";
import TestUsersList from "./testUsers/testUsersList";
import ViewSingleUser from "./testUsers/viewSingleUser";
export default function TestModulePage() {
  return (
    <>
      <div>
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
              component={TestUsersList}
            />
            <ContentRoute
              path="/test-modules/test-user-list/user-details/:id"
              component={ViewSingleUser}
            />
            <ContentRoute
              path="/test-modules/test-users-create"
              component={TestUsersCreate}
            />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}
