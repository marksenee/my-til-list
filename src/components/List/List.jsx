import React from "react";

function List({ tilList }) {
  console.log(tilList);

  const { title, content, clock } = tilList;

  return (
    <>
      <div>
        {title}: {content}: {clock}
      </div>
    </>
  );
}

export default List;
