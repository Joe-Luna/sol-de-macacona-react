import { linksNavar } from "@/helpers/data";
import { Link } from "react-router-dom";
// import Logo from "../images/logo_SIN FONDO.png";

const Navbar = () => {
  return (
    <>
      <header className="absolute w-full z-10 ">
        <div className="container mx-auto ">
          <nav className="flex flex-wrap justify-between space-x-4 py-8 px-10 gap-3 ">
            <Link to="/">
              <img
                src={"/logo-sin-fondo.png"}
                alt="Logo"
                className="w-80 h-40"
              />
            </Link>
            <div>
              {linksNavar.map(({ label, path }, index) => (
                <Link
                  key={index}
                  to={path}
                  className="relative rounded-lg px-3.5 py-2 text-black font-bold hover:bg-slate-100 hover:text-slate-900"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
