import DetailBlogComponent from "../components/DetailBlogComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import NotesComponent from "../components/NotesComponent";

export default function DetailBlogPage() {
  return (
    <div className="bg-[#9BA4B5] min-h-screen">
      <NavbarComponent />
      <DetailBlogComponent />
      <NotesComponent />
      <FooterComponent />
    </div>
  )
}
