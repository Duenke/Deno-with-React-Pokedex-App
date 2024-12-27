import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { AboutPage, AuthorizedPage, GridPage, HomePage, PageLayout } from "./components/pages/index.tsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { FunctionComponent } from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route index element={<HomePage />} />
      <Route path="grid" element={<GridPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="authorized" element={<AuthorizedPage />} />
    </Route>
  )
);

type AppProps = {
  msalInstance: IPublicClientApplication;
};

const App: FunctionComponent<AppProps> = ({ msalInstance }) => {
  return (
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  );
};

export default App;
