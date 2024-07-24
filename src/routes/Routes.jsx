import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import { AccountSelect, ErrorPage, LandingPage, PageNotFound } from "../pages";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/sign-up" element={<Layout simple={true}/>}>
        <Route index element={<AccountSelect />} errorElement={<ErrorPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Routes;
