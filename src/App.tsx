import { FunctionComponent, useState } from "react";
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
import { RecentContext } from "./contexts/RecentContext.tsx";

const App: FunctionComponent = () => {
  const recentlyViewed = useState<Set<string>>(new Set<string>());

  return (
    <RecentContext.Provider value={recentlyViewed}>
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
    </RecentContext.Provider>
  );
};

export default App;
