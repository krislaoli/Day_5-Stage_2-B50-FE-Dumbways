export default function FooterComponent() {
  return (
    <div>
      <footer className="bg-black w-full h-[291px] bottom-0">
        <div className="flex gap-[42px] items-center py-16 pl-72">
          <img src="/public/logo-kris.png" alt="logo" className="h-[110px]" />
          <div className="flex text-white flex-col">
            <h1 className="font-bold text-2xl">DUMBWAYS.ID</h1>
            <p className="font-light text-base">
              Jl. Elang IV, Sawah Lama, Kec. Ciputat, <br /> Kota Tangerang Selatan, Banten 15413
            </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-center items-center text-white h-12">
          <p className="bg-black px-3 rounded-xl font-bold">
            Komisi Pemilihan Umum DumbWays.ID | Mei Kristian Laoli 2023
          </p>
        </div>
      </footer>
    </div>
  );
}
