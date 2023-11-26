
interface CardProps {
  image: string;
  name: string;
  akumulasi: string;
  jumlahVotes: string;
}

const Card: React.FC<CardProps> = ({ image, name, akumulasi, jumlahVotes }) => {
  return (
    <div className="bg-[#023c40] p-4 rounded-md shadow-md w-96 h-96">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover mb-4 rounded-md"
      />

      <h2 className=" text-3xl font-semibold text-white">{name}</h2>
      <p className="text-white">Akumulasi: {akumulasi}</p>
      <p className="text-white">Jumlah Votes: {jumlahVotes}</p>
    </div>
  );
};

export default function DashboardComponent() {
  return (
    <div className="mt-10 dashboard-responsive">
        <div>
        <h1 className="font-bold text-5xl text-center text-black">
          DASHBOARD
        </h1>
      </div>
      <div>
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center font-bold bg-[#435585] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
              1
            </div>
            <div className="text-center font-bold bg-[#435585] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
              2
            </div>
            <div className="text-center font-bold bg-[#435585] text-white mx-[170px] rounded-full w-[40px] h-[40px] flex items-center justify-center">
              3
            </div>

            <Card
              image="public/paslon-image/paslon-1.jpg"
              name="Tiger"
              akumulasi="45%"
              jumlahVotes="1.000"
            />
            <Card
              image="public/paslon-image/paslon-2.jpg"
              name="Crocodile"
              akumulasi="75%"
              jumlahVotes="4.000"
            />
            <Card
              image="public/paslon-image/paslon-3.jpg"
              name="Osprey"
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
            <thead className="bg-[#FF5B22] text-white">
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
