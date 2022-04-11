import React, { createContext, useState } from "react";
export const LoginContext = createContext();
const LoginContextProvider = (props) => {
  const [auth, setAuth] = useState(true);
  return (
    <LoginContext.Provider value={[auth, setAuth]}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
