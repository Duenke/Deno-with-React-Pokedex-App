import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { AboutPage, HomePage, PageLayout } from "./components/pages/index.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AuthorizedPage from "./components/pages/AuthorizedPage.tsx";
import GridPage from "./components/pages/GridPage.tsx";

type AppProps = {
  msalInstance: IPublicClientApplication;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="authorized" element={<AuthorizedPage />} />
      <Route path="grid" element={<GridPage />} />
    </Route>,
  ),
);

function App({ msalInstance }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  );
}

export default App;
