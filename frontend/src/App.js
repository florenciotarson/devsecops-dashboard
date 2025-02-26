import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { fetchSecureData } from "./api";

const App = () => {
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect, logout } = useAuth0();
  const [secureData, setSecureData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        fetchSecureData(token).then((data) => setSecureData(data));
      });
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={loginWithRedirect}>Log in</button>
      ) : (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>Log out</button>
          <h2>Secure Data:</h2>
          <pre>{JSON.stringify(secureData, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default App;
