import React from "react";
import buildQuery from "../api/build-query";

const Landing = ({ currentUser }) => {
  return (
    <div>
      <h2>Landing Page</h2>
      {currentUser && <p>{currentUser.email}</p>}
    </div>
  );
};

Landing.getInitialProps = async (context) => {
  const client = buildQuery(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default Landing;
