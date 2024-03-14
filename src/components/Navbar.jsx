import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full p-4 flex justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-bold text-5xl">
          Netflix
        </h1>
      </Link>

      <div>
        <Link to="/login">
          <button className="mr-4">Login</button>
        </Link>

        <Link to="/signup">
          <button className="bg-red-600 px-4 py-2 rounded">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
