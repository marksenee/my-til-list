import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import List from "../components/list/List";
import Form from "../components/form/Form";
import { addTil, deleteTil } from "../redux/modules/tils";

function Home() {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    clock: "",
  });

  const { title, content, clock } = inputs;

  // useSelector
  const { tils } = useSelector((state) => state.til_list);

  // dispatch
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log("name:", name, " [name]:", [name], " value:", value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickHandler = () => {
    // 값이 없을 경우 제어시키기
    if (title === "" || content === "" || clock === "") {
      alert("내용을 입력하세요");
    } else {
      dispatch(addTil(title, content, clock));
    }
    // input 초기화
    setInputs({
      title: "",
      content: "",
      clock: "",
    });
  };

  // 삭제
  const onDeleteTil = (id) => {
    dispatch(deleteTil(id));
  };

  return (
    <>
      <Form
        tilList={tils}
        onChange={onChangeHandler}
        onClick={onClickHandler}
      />
      <div>
        <h2>TIL</h2>
        <div>
          {tils.map((til) => (
            <List key={til.id} tilList={til} onDelete={onDeleteTil} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
