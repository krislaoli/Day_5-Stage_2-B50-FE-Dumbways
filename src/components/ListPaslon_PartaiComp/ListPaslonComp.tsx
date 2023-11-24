export default function ListPaslonComp() {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl pt-28 pb-14 text-black">
        LIST PASLON
      </h1>
      <div className="flex justify-center my-24">
        <table className="w-3/4 text-center">
          <thead className="bg-[#FF5B22] text-black">
            <tr>
              <th className="py-1 px-4 border border-t-2 border-black">No</th>
              <th className="py-2 px-4 border border-t-2 border-black">Logo</th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Ketua Umum
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Visi & Misi
              </th>
              <th className="py-2 px-4 border border-t-2 border-black">
                Alamat
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="py-1 px-4 border border-t-2 border-black">1</td>
              <td className="py-2 px-4 border border-t-2 border-black">
                <img
                  src="/public/paslon-image/paslon-1.jpg"
                  alt="Foto Kandidat"
                  className="w-96"
                />
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Harimau Raja Hutan
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Membuat Hutan menjadi menakutkan
              </td>
              <td className="py-2 px-4 border border-t-2 border-black">
                Hutan Tidak terkendali
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
