import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to='/myaccount'>
        <button>Sign in</button>
      </Link>
    </div>
  );
};

export default Home;
