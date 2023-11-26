import { Dispatch, SetStateAction, useState } from "react";

export default function AddVoteComp({
  isOpen,
  setIsOpen,
}: {
  isOpen: true;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [paslon] = useState([
    {
      img: "public/paslon-image/paslon-1.jpg",
      name: "Tiger",
      visiMisi: "Membuat Hutan menjadi menakutkan",
      partaiPengusung: ["Partai Darat", "Partai Junggle", "Partai Gigi tajam"],
    },
    {
      img: "public/paslon-image/paslon-2.jpg",
      name: "Crocodile",
      visiMisi: "Menjadikan Air Menjadi Hijau",
      partaiPengusung: [
        "Partai Air",
        "Menjadikan Air Untuk Bermangsa",
        "Partai Menyelam",
      ],
    },
    {
      img: "public/paslon-image/paslon-3.jpg",
      name: "Cintara",
      visiMisi: "Menjadikan Langit Untuk Bermangsa",
      partaiPengusung: [
        "Partai Udara",
        "Menjadikan Langit Untuk Bermangsa",
        "Partai Mengudara",
      ],
    },
  ]);

  const [selectedPaslon, setSelectedPaslon] = useState(-1);

  return (
    <div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } bg-[rgba(0,0,0,0.5)] fixed top-0 bottom-0 left-0 right-0 z-10`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`${
          isOpen ? "block" : " hidden"
        } bg-slate-500 fixed  w-fit p-10 top-32 left-0 right-0 mx-auto z-10 rounded-lg`}
      >
        <h2 className="text-5xl text-center font-bold">
          MASUKAN PILIHANMU
        </h2>
        <div className="flex gap-10">
          {paslon.map((p, idx) => (
            <div
              className={`mt-10 border w-fit p-5 rounded-lg text-white shadow bg-slate-950 relative hover:cursor-pointer transition  ${
                idx === selectedPaslon
                  ? "bg-slate-50 shadow-xl  shadow-zinc-800"
                  : "hover:bg-zinc-700  group hover:shadow-lg"
              }`}
              key={p.name + idx}
              onClick={() => setSelectedPaslon(idx)}
            >
              <div
                className={`text-4xl font-semibold absolute -right-5 -top-5 border-4 text-white border-white  w-16 h-16 flex items-center justify-center rounded-full group-hover:bg-black group-hover:text-yellow-300 ${
                  idx === selectedPaslon ? "bg-rose-700" : "bg-stone-950"
                }`}
              >
                {idx + 1}
              </div>

              <img
                src={p.img}
                alt=""
                className="w-[301px] h-[189px] object-cover object-center"
              />
              <h3
                className={`text-2xl font-bold ${
                  idx === selectedPaslon && "text-black"
                }`}
              >
                {p.name}
              </h3>
              <p className={` ${idx === selectedPaslon && "text-black"}`}>
                {p.visiMisi}
              </p>
              <p
                className={`mt-2 font-semibold ${
                  idx === selectedPaslon && "text-black"
                }`}
              >
                Partai Pengusung:
              </p>
              <ul
                className={`list-disc ml-4 ${
                  idx === selectedPaslon && "text-black"
                }`}
              >
                {p.partaiPengusung.map((pengusung) => (
                  <li key={pengusung}>{pengusung}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-10 mt-10 ">
          <button
            className="py-2 transition hover:bg-[#435585] hover:text-white    bg-black hover:bg-[#FE0000] border-black border border-black text-white w-full text-2xl font-bold  rounded-lg"
            onClick={() => setSelectedPaslon(-1)}
          >
            Reset
          </button>
          <button className="py-1 transition hover:bg-yellow-300 border bg-[#5E5A00] hover:text-black w-full text-2xl font-bold text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
