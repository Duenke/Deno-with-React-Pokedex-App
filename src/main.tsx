import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import App from "./App.tsx";

const appConfig: Configuration = {
  auth: {
    clientId: "< your frontend app client id here >",
    authority: "https://login.microsoftonline.com/microsoft.onmicrosoft.com",
    navigateToLoginRequestUrl: true,
    redirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(appConfig);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <FluentProvider theme={webDarkTheme}>
      <App msalInstance={msalInstance} />
    </FluentProvider>
  </StrictMode>
);
