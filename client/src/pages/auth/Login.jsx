import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login Not a member <Link to="/auth/signup">Signup</Link>
    </div>
  );
};

export default Login;
