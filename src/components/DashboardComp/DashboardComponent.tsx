// import FooterComponent from "../FooterComponent";

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
    <div className="mt-10">
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
              akumulasi="45%"
              jumlahVotes="1.000"
            />
            <Card
              image="public/paslon-image/paslon-2.jpg"
              name="Minion"
              akumulasi="75%"
              jumlahVotes="4.000"
            />
            <Card
              image="public/paslon-image/paslon-3.jpg"
              name="Toys"
              akumulasi="10%"
              jumlahVotes="800"
            />
          </div>
        </div>
      </div>


      {/* ======================== LIST VOTER ======================== */}
      <div className="bg-[#B0A695] w-full h-2/3 mt-48 pb-20">
        <h1 className="text-center font-bold text-5xl pt-28 pb-14 text-black">
          LIST VOTER
        </h1>
        {/* Table */}
        <div className="flex justify-center">
          <table className="w-3/5">
            <thead className="bg-[#B0926A] text-white">
              <tr className="text-black">
                <th className="py-1 px-4 border border-t-2 border-black">No</th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Nama Lengkap
                </th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Alamat
                </th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Jenis Kelamin
                </th>
                <th className="py-2 px-4 border border-t-2 border-black">
                  Paslon
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">1</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Ronaldo
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Portugal
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Laki-Laki
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Anies Baswedan
                </td>
              </tr>
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">2</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Lady Gaga
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Lenox Hill, New York, Amerika
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Perempuan
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Ganjar
                </td>
              </tr>
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">3</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Leo Messi
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Aergentina
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Laki-Laki
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Prabowo
                </td>
              </tr>
              <tr>
                <td className="py-1 px-4 border border-t-2 border-black">4</td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Billie Eilish
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Los Angeles, California, Amerika Serikat
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Perempuan
                </td>
                <td className="py-2 px-4 border border-t-2 border-black">
                  Ganjar
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-3/5 mx-auto flex justify-center mt-10">
          <h2 className="mr-auto  font-bold text-2xl text-black">
            Total Suara Terkumpul : 80.0000 Voters
          </h2>
        </div>
      </div>
    </div>
  );
}
