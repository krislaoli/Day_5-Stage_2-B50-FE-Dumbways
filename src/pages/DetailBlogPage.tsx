import DetailBlogComponent from "../components/DetailBlogComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

export default function DetailBlogPage() {
  return (
    <div className="bg-[#9BA4B5] min-h-screen">
      <NavbarComponent />
      <DetailBlogComponent />
      <FooterComponent />
    </div>
  )
}
