import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Update({ tils }) {
  const { id, title, content, clock } = tils;

  const [editInputs, setEditInputs] = useState({
    title: "",
    content: "",
    clock: "",
  });

  // navigate
  const navigate = useNavigate();

  // onChage function
  const onChangeValue = (e) => {
    // 초기화

    const { name, value } = e.target;
    console.log("name", value);

    setEditInputs({
      title: "",
      content: "",
      clock: "",
    });

    setEditInputs({
      ...editInputs,
      [name]: value,
    });
  };

  return (
    <>
      <div>ID : {id}</div>
      <input
        placeholder="내용을 입력하세요"
        name="title"
        value={title}
        onChange={onChangeValue}
      />
      <input
        placeholder="내용을 입력하세요"
        name="content"
        value={content}
        onChange={onChangeValue}
      />
      <input
        placeholder="내용을 입력하세요"
        name="clock"
        value={clock}
        onChange={onChangeValue}
      />
      <button
        onClick={(id) => {
          navigate(`/about/id`);
        }}
      >
        이전페이지
      </button>
      <button>완료</button>
    </>
  );
}

export default Update;
