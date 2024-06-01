import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="http://dev-yzqpo6pq0z0j260v.us.auth0.com/"
    clientId="hI7IPvA0OyKeMeU0mllzp8PDu7BgVb0s"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
