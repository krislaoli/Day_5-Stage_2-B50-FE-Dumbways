export default function AddPaslonComp() {
  return (
    <div className="bg-[#9BA4B5] h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold mt-10 pb-10 text-4xl text-center text-black">
          Add Paslon
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row items-center w-full max-w-[80rem]">
          <img
            src="public/paslon-image/paslon-1.jpg"
            alt="paslon-1"
            className="w-50 h-50 lg:w-2/4 lg:h-1/4 mr-0 lg:mr-4 mb-4 lg:mb-0"
          />
          <form className="w-full">
            <label htmlFor="nama" className="block text-black font-bold mb-2">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label
              htmlFor="nomor-urut"
              className="block text-black font-bold mb-2 mt-4"
            >
              Nomor Urut
            </label>
            <input
              type="text"
              id="nomor-urut"
              name="nomor-urut"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label
              htmlFor="visi-misi"
              className="block text-black font-bold mb-2 mt-4"
            >
              Visi Misi
            </label>
            <textarea
              id="visi-misi"
              name="visi-misi"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
            <button
              type="submit"
              className="bg-black hover:bg-[#9BA4B5] text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
