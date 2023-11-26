import VoteComp from "../../components/ElectionInfoComp/VoteComp";
import NavbarComponent from "../../components/NavbarComponent";

export default function VotePage() {
  return (
    <div className="bg-[#9BA4B5] min-h-screen">
      <NavbarComponent />
      <VoteComp />
    </div>
  );
}
