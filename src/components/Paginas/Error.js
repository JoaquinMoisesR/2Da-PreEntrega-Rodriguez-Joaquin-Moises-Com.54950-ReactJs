import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1 className="text-center">404 ERROR NOT FOUND</h1>
      <Link to="/">Volver a Home</Link>
    </div>
  );
};

export default Error;