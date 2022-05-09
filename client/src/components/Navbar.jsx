import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-1 border-4">
      <h1>Navbar</h1>
      <Link to="/auth/login">Login</Link>
    </div>
  );
};

export default Navbar;
