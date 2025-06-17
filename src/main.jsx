import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App.jsx";
const client_id =
  "687982549449-h0sq4upribbgc6v3v1p3ie9icm1mdub4.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={client_id}>
      <Provider store={appStore}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
