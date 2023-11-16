import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailBlogPage from "./pages/DetailBlogPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import DashboardPage from "./pages/DashboardPage"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}   />
        <Route path="/detailblogpage" element={<DetailBlogPage />}   />
        <Route path="/loginpage" element={<LoginPage />}   />
        <Route path="/registerpage" element={<RegisterPage />}   />
        <Route path="/dashboardpage" element={<DashboardPage />}   />

        
    </Routes>
  )
}
