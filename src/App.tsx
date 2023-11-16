import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailBlogPage from "./pages/DetailBlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { PrivateRouteAdmin, PrivateRouteUser } from "./utility/PrivateRoute";

export default function App() {
  return (
    <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />

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
