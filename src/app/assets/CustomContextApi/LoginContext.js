import React, { createContext, useState } from "react";
export const LoginContext = createContext();
const LoginContextProvider = (props) => {
  const [auth, setAuth] = useState(true);
  console.log("from context", auth);
  return (
    <LoginContext.Provider value={[auth, setAuth]}>
      {props.children}
    </LoginContext.Provider>
  );
};
export default LoginContextProvider;
