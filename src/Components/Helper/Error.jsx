import React from "react";

const Error = ({ error }) => {
  if (!error) null;
  return <p style={{ color: "#f31", margin: "1rem 0" }}>{error}</p>;
};

export default Error;
