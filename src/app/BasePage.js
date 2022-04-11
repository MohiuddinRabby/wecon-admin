/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";

const TestModulePage = lazy(() =>
  import("./modules/TestModulesTwo/testModulesTwo")
);
const TestModulePageThree = lazy(() =>
  import("./modules/TestModulesThree/testModulesThree")
);
const TransactionPage = lazy(() =>
  import("./modules/TranscationPage/transactionPage")
);

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <ContentRoute path="/test-modules" component={TestModulePage} />
        <ContentRoute
          path="/test-modules-three"
          component={TestModulePageThree}
        />
        <ContentRoute path="/transactions" component={TransactionPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
