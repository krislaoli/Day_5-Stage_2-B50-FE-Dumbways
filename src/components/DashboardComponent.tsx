import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent"

interface CardProps {
  image: string;
  name: string;
  akumulasi: string;
  jumlahVotes: string;
}

const Card: React.FC<CardProps> = ({ image, name, akumulasi, jumlahVotes }) => {
  return (
    <div className="bg-[#ED7D31] p-4 rounded-md shadow-md w-96 h-96">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />

      <h2 className="text-lg font-semibold text-white">{name}</h2>
      <p className="text-white">Akumulasi: {akumulasi}</p>
      <p className="text-white">Jumlah Votes: {jumlahVotes}</p>
    </div>
  );
};

export default function DashboardComponent() {
  return (
    <div>
      <NavbarComponent />
      <div>
        <h1 className="font-bold text-4xl text-center text-slate-800">
          DASHBOARD
        </h1>
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center font-bold bg-[#FF6C22] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
              1
            </div>
            <div className="text-center font-bold bg-[#FF6C22] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
              2
            </div>
            <div className="text-center font-bold bg-[#FF6C22] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
              3
            </div>

            <Card
              image="public/paslon-image/paslon-1.jpg"
              name="Toni Santoso"
              akumulasi="30%"
              jumlahVotes="30.000"
            />
            <Card
              image="public/paslon-image/paslon-2.jpg"
              name="Minion"
              akumulasi="40%"
              jumlahVotes="40.000"
            />
            <Card
              image="public/paslon-image/paslon-3.jpg"
              name="Toys"
              akumulasi="30%"
              jumlahVotes="40.000"
            />
          </div>
        </div>
      </div>
{/* <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br /> */}
      <FooterComponent />
    </div>
  );
}
