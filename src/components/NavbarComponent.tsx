import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <div>
      <div className="icon-navbar ">
        <nav className="container flex item-center justify-between mx-auto py-2">
          <div className="flex items-center gap-3">
            <div>
            <Link to="/"><img
                src={"/public/logo-kris.png"}
                alt="Logo"
                className="h-10 w-10"
              /></Link>
            </div>
            <h1 style={{ color: "white", fontWeight: "bold" }}>PEMILU PRESIDEN DUMBWAYS.ID</h1>
          </div>
          <div className="flex gap-5 items-center">
            <a href="" className="text-white">
              <Link to="/addpartaipage">Partai</Link>
            </a>
            <span className="w-0.5 h-5 bg-white"></span>
            <a href="" className="text-white">
            <Link to="/addpaslonpage">Paslon</Link>
            </a>
            <span className="w-0.5 h-5 bg-white"></span>
            <a href="" className="text-white">
              <Link to="/addvotepage">Voting</Link>
            </a>
            <div className="bg-gray-300 w-10 h-10 flex items-center justify-center rounded-full font-bold" style={{fontSize: "25px"}}>D</div>
          </div>
        </nav>
      </div>
    </div>
  );
}

