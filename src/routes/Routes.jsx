import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import { AccountSelect, CarrerStatus, CreateAccount, ErrorPage, LandingPage, PageNotFound, ProfileSetup, SuccessPage, VerifyAccount } from "../pages";

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
      <Route path="/career-status" element={<Layout simple={true}/>}>
        <Route index element={<CarrerStatus />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/setup-profile" element={<Layout simple={true} back={true}/>}>
        <Route index element={<ProfileSetup />} errorElement={<ErrorPage />} />
      </Route>
      <Route path="/success" element={<Layout simple={true} back={true}/>}>
        <Route index element={<SuccessPage />} errorElement={<ErrorPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default Routes;
