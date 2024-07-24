import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import { AccountSelect, CreateAccount, ErrorPage, LandingPage, PageNotFound, VerifyAccount } from "../pages";

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/sign-up" element={<Layout simple={true}/>}>
        <Route index element={<AccountSelect />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/create-account" element={<Layout simple={true}/>}>
        <Route index element={<CreateAccount />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/verify-account" element={<Layout simple={true}/>}>
        <Route index element={<VerifyAccount />} errorElement={<ErrorPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Routes;
