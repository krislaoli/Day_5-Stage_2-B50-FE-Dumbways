import DashboardComponent from "../components/DashboardComp/DashboardComponent";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";

export default function DashboardPage() {
  return (
    <div className="bg-[#9BA4B5] min-h-screen">
      <NavbarComponent />
      <DashboardComponent />
      <FooterComponent />
    </div>
  );
}
