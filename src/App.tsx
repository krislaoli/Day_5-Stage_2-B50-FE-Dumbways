import { Route, Routes } from "react-router-dom";
import { PrivateRouteAdmin, PrivateRouteUser } from "./utility/PrivateRoute";
import HomePage from "./pages/HomePage";
import DetailBlogPage from "./pages/DetailBlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import VotePage from "./pages/ElectionInfoPage/VotePage";
import ModalVotePage from "./pages/ModalPage/AddVotePage";

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/addvotepage" element={<VotePage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/detailblogpage" element={<DetailBlogPage />} />
        <Route path="/modalvotepage" element={<ModalVotePage />} />
        
      // PrivateRoute Admin
      <Route element={<PrivateRouteAdmin />}>
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/" element={<HomePage />} />
      </Route>

      // PrivateRoute User
      <Route element={<PrivateRouteUser />}>
        <Route path="/detailblogpage" element={<DetailBlogPage />} />
      </Route>
    </Routes>
  );
}
