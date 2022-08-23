import React, { useState } from "react";

import List from "../components/List/List";
import Form from "../components/Form/Form";

function Home() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    clock: "",
  });

  const { title, content, clock } = inputs;

  const [tilList, setTIlList] = useState([
    {
      id: 1,
      title: "React",
      content: "리액트 실습",
      clock: "시간",
    },
    {
      id: 2,
      title: "React2",
      content: "리액트 실습2",
      clock: "시간",
    },
  ]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("name:", name, " [name]:", [name], " value:", value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickHandler = () => {
    setTIlList([
      ...tilList,
      { id: tilList.length + 1, title: title, content: content, clock: clock },
    ]);

    console.log("등록이 완료되었습니다.");

    // input 초기화
    setInputs({
      title: "",
      content: "",
      clock: "",
    });
  };

  return (
    <>
      <Form
        tilList={tilList}
        onChange={onChangeHandler}
        onClick={onClickHandler}
      />
      <div>
        <h2>TIL</h2>
        <div>
          {tilList.map((til) => (
            <List key={til.id} tilList={til} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
