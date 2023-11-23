export default function ListPaslonComp() {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl pt-28 pb-14 text-black">
        LIST PASLON
      </h1>
      <div className="flex justify-center">
        <table className="w-3/5">
          <thead className="bg-[#B0926A] text-white">
            <tr className="text-black">
              <th className="py-1 px-4 border border-t-2 border-black">
                No Urut
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Image
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Nama 
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Visi & Misi
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Koalisi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="py-1 px-4 border border-t-2 border-black">1</td>
              <td className="py-2 px-4 border border-t-2 border-black flex items-center justify-center">
                <img
                  src="/public/rapat-kpu.png"
                  alt="Description of the image"
                  className="w-8 h-8 "
                />
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
              Toni Santoso
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
               - Menjadikan air menjadi biru
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
              - Partai Demokrat
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
