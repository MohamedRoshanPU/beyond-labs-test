import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          <button onClick={() => navigate("/")} className="hover:text-gray-400">
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className="hover:text-gray-400"
          >
            About
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="hover:text-gray-400"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
