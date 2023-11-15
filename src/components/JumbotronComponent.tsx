// import React from "react";

export default function JumbotronComponent() {

  return (
    <div className="jumbotron container mt-10 rounded-xl mx-auto">
      <img src="public/logo-dw.png" alt="" width={400} className="absolute"/>

      <div className="flex items-end justify-between">
        <h1 className="text-7xl px-10 mb-10 text-white font-semibold">
          SELAMAT DATANG <span className="text-2xl block w-[600px]">PEMILU PRESIDEN DUMBWAYS.ID YANG JUJUR</span> <span className="text-2xl block w-[600px]">DIPILIH MELALU
          SEBUAH ARTI NAMA</span>
        </h1>
        <img src="public/kotak-suara.png" alt="" width={400} className="mr-20 mb-10"/>
      </div>
    </div>
  );
}
