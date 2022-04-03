/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */
import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "../_metronic/layout";
import { LoginContext } from "./assets/CustomContextApi/LoginContext";
import BasePage from "./BasePage";
import Login from "./modules/Login/login";

export function Routes() {
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useContext(LoginContext);
  return (
    <Switch>
      <Route>
        {!auth ? (
          <Route>
            {/* redirect to login page */}
            <Login />
          </Route>
        ) : (
          <Layout>
            <BasePage />
          </Layout>
        )}
      </Route>
    </Switch>
  );
}
