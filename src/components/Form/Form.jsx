import React from "react";

function Form({ tilList, onChange, onClick }) {
  const { title, content, clock } = tilList;

  return (
    <>
      <div>
        <input
          placeholder="과목"
          name="title"
          value={title}
          onChange={onChange}
        />
        <input
          placeholder="내용"
          name="content"
          value={content}
          onChange={onChange}
        />
        <input
          placeholder="공부시간"
          name="clock"
          value={clock}
          onChange={onChange}
        />
        <button onClick={onClick}>추가하기</button>
      </div>
    </>
  );
}

export default Form;
