import DashboardPage from "@/pages/dashboard";
import HomePage from "@/pages/home";
import { Route, Routes } from "react-router";
import paths from "./paths";

type Props = {};

const Router = (props: Props) => {
  return (
    <Routes>
      <Route path={paths.root} element={<HomePage />} />
      <Route path={paths.dashboard.root} element={<DashboardPage />} />
    </Routes>
  );
};

export default Router;
