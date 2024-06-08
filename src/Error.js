import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <h2>404</h2>
      <h3>PAGE NOT FOUND</h3>
      <Link to="/">
        <Button>Go To Home</Button>
      </Link>
    </div>
  );
};

export default Error;
