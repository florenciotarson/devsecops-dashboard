import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthProvider from "./auth/AuthProvider";  // ✅ Import AuthProvider

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
