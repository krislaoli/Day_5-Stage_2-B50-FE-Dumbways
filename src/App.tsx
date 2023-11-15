import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DetailBlogPage from "./pages/DetailBlogPage"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}   />
        <Route path="/detailblogpage" element={<DetailBlogPage />}   />
    </Routes>
  )
}
