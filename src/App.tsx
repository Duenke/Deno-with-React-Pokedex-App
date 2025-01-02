import { FunctionComponent } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  PageLayout,
  PokemonListPage,
  PokemonPage,
} from "./pages/index.tsx";

const App: FunctionComponent = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="pokemon-list" element={<PokemonListPage />} />
            <Route path="pokemon/:name" element={<PokemonPage />} />
          </Route>,
        ),
      )}
    />
  );
};

export default App;
