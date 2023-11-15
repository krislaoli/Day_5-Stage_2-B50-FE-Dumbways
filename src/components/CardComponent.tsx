import { Link } from 'react-router-dom';

export function BigCard() {
  return (
    <div
      className="w-[1015px] h-[500px] relative col-span-2"
      style={{
        background: "url('/public/rapat-kpu.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full bg-gradient-to-t from-[rgba(0,0,0.1)] to-[rgba(0,0,0,0)]"></div>
      <div className="absolute bottom-0 mb-6 px-5 ">
        <h3 className="bg-[#EF0307] mb-4 font-semibold text-2xl text-white w-fit px-3 py-2 rounded-xl">
          SENIN, 03 JAN 2023
        </h3>
        <h1 className="text-white text-4xl font-semibold"> 
        <Link to={'/detailblogpage'}>KPU TETAPKAN 3 MENTOR TERBAIK</Link>
        </h1>
        <h1 className="text-white text-2xl">Super Admin</h1>
      </div>
    </div>
  );
}
export function SmallCard() {
  return (
    <div className="bg-white w-[500px] h-[500px] ">
      <img src="/public/rapat-kpu.png" alt="" />
      <div className="p-5 mt-0">
      <h3 className="bg-[#EF0307] mb-3 font-semibold text-2xl text-white w-fit px-3 py-2 rounded-xl ">
        SENIN, 03 JAN 2023
      </h3>
      <h1 className="text-black text-4xl font-bold"><Link to={'/detailblogpage'}>KPU TETAPKAN 3{" "}
        <strong>
          <br />
        </strong>
        MENTOR TERBAIK</Link>
        
      </h1>
      <h1 className="text-black text-3xl font-semibold">Super Admin</h1>
      </div>
    </div>
  );
}
