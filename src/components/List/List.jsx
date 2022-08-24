import React from "react";
import { useNavigate } from "react-router-dom";

function List({ tilList, onDelete }) {
  const { id, title, content, clock } = tilList;

  // navigate
  const navigate = useNavigate();

  // navigate function
  const toDetail = (id) => {
    navigate(`/about/${id}`);
  };

  return (
    <>
      <div>
        {title}: {content}: {clock}
      </div>
      <button
        onClick={() => {
          toDetail(id);
        }}
      >
        상세
      </button>
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
