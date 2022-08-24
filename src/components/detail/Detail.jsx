import React from "react";

function Detail({ tils }) {
  const { id, title, content, clock } = tils;
  return (
    <>
      <div>ID : {id}</div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{clock}</div>
    </>
  );
}

export default Detail;
