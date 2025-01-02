import { FunctionComponent } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  AboutPage,
  AuthorizedPage,
  GridPage,
  HomePage,
  PageLayout,
} from "./pages/index.tsx";

const App: FunctionComponent = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>,
        ),
      )}
    />
  );
};

export default App;
