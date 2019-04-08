import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h3>
      404! <Link to="/">- The page ure looking for is unavaibale</Link>
    </h3>
  </div>
);

export default NotFound;
