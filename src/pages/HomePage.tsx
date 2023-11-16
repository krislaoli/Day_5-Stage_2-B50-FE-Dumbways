import { BigCard, SmallCard } from "../components/CardComponent";
import JumboTronComponent from "../components/JumbotronComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import NotesComponent from "../components/NotesComponent";

export default function HomePage() {
  const data = [
    {
      date: "senin, 3 januari 2023",
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "SuperAdmin",
    },
    {
      date: "senin, 3 januari 2023",
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "SuperAdmin",
    },
    {
      date: "senin, 3 januari 2023",
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "SuperAdmin",
    },
    {
      date: "senin, 3 januari 2023",
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "SuperAdmin",
    },
    {
      date: "senin, 3 januari 2023",
      title: "KPU TETAPKAN 3 MENTOR TERBAIK",
      author: "SuperAdmin",
    },
  ];

  return (
    <div className="bg-[#9BA4B5] min-h-screen">
      <NavbarComponent />
      <JumboTronComponent />

      <div className="grid grid-cols-3 gap-4 container mx-auto mt-10">
        {data.map((post, idx) => (idx == 0 ? <BigCard /> : <SmallCard />))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <NotesComponent />
      <FooterComponent />
    </div>
  );
}
