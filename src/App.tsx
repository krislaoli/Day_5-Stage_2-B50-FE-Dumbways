import { Route, Routes } from "react-router-dom";
import { PrivateRouteAdmin, PrivateRouteUser } from "./utility/PrivateRoute";

// import {
//   HomePage,
//   DetailBlogPage,
//   LoginPage,
//   RegisterPage,
//   DashboardPage,
//   VotePage,
//   AddVotePage,
//   AddPaslonPage,
//   AddPartaiPage,
//   ListPaslonPage,
//   ListPartaiPage,
// } from "./pages";

import HomePage from "./pages/HomePage";
import DetailBlogPage from "./pages/DetailBlogPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import VotePage from "./pages/ElectionInfoPage/VotePage";
import AddVotePage from "./pages/ModalPage/AddVotePage";
import AddPaslonPage from "./pages/AddPaslon_PartaiPage/AddPaslonPage";
import AddPartaiPage from "./pages/AddPaslon_PartaiPage/AddPartaiPage";
import ListPaslonPage from "./pages/ListPaslon_PartaiPage/ListPaslonPage";
import ListPartaiPage from "./pages/ListPaslon_PartaiPage/ListPartaiPage";

// import Contoh from "./pages/Contoh";

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/votepage" element={<VotePage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/detailblogpage" element={<DetailBlogPage />} />
        <Route path="/addvotepage" element={<AddVotePage />} />
        <Route path="/addpaslonpage" element={<AddPaslonPage />} />
        <Route path="/addpartaipage" element={<AddPartaiPage />} />
        <Route path="/listpaslonpage" element={<ListPaslonPage />} />
        <Route path="/listpartaipage" element={<ListPartaiPage />} />
        {/* <Route path="/contoh" element={<Contoh />} /> */}
        
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
