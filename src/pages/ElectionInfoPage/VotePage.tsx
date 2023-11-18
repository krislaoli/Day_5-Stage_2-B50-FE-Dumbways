// import VoteInfo from "../../components/ElectionInfoComp/VoteInfo";
import NavbarComponent from "../../components/NavbarComponent";
// // import FooterComponent from "../../components/FooterComponent";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const VotePage: React.FC = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Toni Santoso", "Minion", "Toys"],
    datasets: [
      {
        data: [12, 9, 50],
        backgroundColor: ["red", "green", "yellow"],
        borderColor: ["red", "green", "yellow"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-screen bg-[#9BA4B5]">
      <NavbarComponent />
      <h1 className="font-bold text-5xl text-center text-black mt-10">
        INFO PEMILU TERUPDATE
      </h1>
      <div className="flex justify-center mt-10">
        <div className="my-10 w-[600px] h-[368px] top-[353px] left-[179px] radius-[15px] flex flex-col items-center justify-start mr-4">
          <p className="font-bold text-4xl text-black mb-4">Hasil :</p>
          <Pie data={data} />
        </div>
        <div className="flex flex-col space-y-4 my-10 p-4">
          <div className="bg-[#F8DE22] p-4  rounded-md shadow-md w-full md:w-[657px] h-auto md:h-[146px] md:top-[429px] md:left-[604px] radius-[15px] flex">
            <div className="bg-black w-[20%] md:w-[80px] h-auto md:h-[112px] ml-4 radius-[10px] border-[2px] rounded-md">
              <p className="text-white text-center my-3">
                No.
                <br />
                <span>Paslon</span>
                <strong className="text-4xl block">3</strong>
              </p>
            </div>
            <div className="mt-4 font-bold text-4xl text-black ml-4 text-center">
              <p className="text-start">Toys</p>
              <p className="text-start text-3xl">50%</p>
            </div>
          </div>
          <div className="bg-[#FE0000] p-4  rounded-md shadow-md w-full md:w-[657px] h-auto md:h-[146px] md:top-[429px] md:left-[604px] radius-[15px] flex">
            <div className="bg-black w-[20%] md:w-[80px] h-auto md:h-[112px] ml-4 radius-[10px] border-[2px] rounded-md">
              <p className="text-white text-center my-3">
                No.
                <br />
                <span>Paslon</span>
                <strong className="text-4xl block">1</strong>
              </p>
            </div>
            <div className="mt-4 font-bold text-4xl text-black ml-4 text-center">
              <p className="text-start">Toni Sentosa</p>
              <p className="text-start text-3xl">12%</p>
            </div>
          </div>
          <div className="bg-[#3D9634] p-4  rounded-md shadow-md w-full md:w-[657px] h-auto md:h-[146px] md:top-[429px] md:left-[604px] radius-[15px] flex">
            <div className="bg-black w-[20%] md:w-[80px] h-auto md:h-[112px] ml-4 radius-[10px] border-[2px] rounded-md">
              <p className="text-white text-center my-3">
                No.
                <br />
                <span>Paslon</span>
                <strong className="text-4xl block">2</strong>
              </p>
            </div>
            <div className="mt-4 font-bold text-4xl text-black ml-4 text-center">
              <p className="text-start">Minion</p>
              <p className="text-start text-3xl">9%</p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="my-10 bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
              style={{ background: "rgba(94, 90, 0, 1)" }}
            >
              Masukan Suaramu
            </button>
          </div>
          {/* <h1 className="font-bold text-3xl text-black">ANDA SUDAH MEMILIH !!!!</h1> */}
        </div>
      </div>
    </div>
  );
};

export default VotePage;
