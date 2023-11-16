import { Link } from "react-router-dom";

export default function LoginComp() {
  return (
    <div className="bg-[#9BA4B5] h-screen flex justify-center items-center">
      <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/5 h-auto bg-white rounded-2xl p-8 mx-auto my-8">
        <h1
          className="text-3xl font-bold mb-4 text-center text-slate-900"
          style={{ color: "rgba(94, 90, 0, 1)" }}
        >
          LOGIN
        </h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 border-2 border-black rounded-md"
              placeholder="Input Username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border-2 border-black rounded-md"
              placeholder="Input Password"
            />
          </div>
          {/* <div className="items-center mb-4">
            <div>
              <p className="text-slate-800 hover:underline text-right" >Forgot Password?</p>
            </div>
          </div> */}
          <button
            type="submit"   
            className="w-full bg-slate-700 text-white font-bold py-2 px-4 rounded-md hover:bg-slate-900"
            style={{ background: "rgba(94, 90, 0, 1)" }}
          >
            SUBMIT
          </button>
          <div className="mt-4 text-right">
            <p className="text-slate-800" style={{ fontStyle: "italic" }}>
              Belum memilik akun ?{" "}
              <strong className="hover:underline">
                <Link to="/registerpage">Register</Link>
              </strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
