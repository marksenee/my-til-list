import React from "react";

function List({ tilList, onDelete }) {
  console.log(tilList);

  const { id, title, content, clock } = tilList;

  return (
    <>
      <div>
        {title}: {content}: {clock}
      </div>
      <button>상세</button>
      <button>완료</button>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        삭제
      </button>
    </>
  );
}

export default List;
