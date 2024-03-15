import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="absolute w-full p-4 flex justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold text-5xl">
          Movix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="mr-4">Profile</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="mr-4">Login</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-4 py-2 rounded">Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
