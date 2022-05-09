import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      Signup alredy A member <Link to={"/auth/login"}>Login</Link>
    </div>
  );
};

export default Signup;
