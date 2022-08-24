import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Edit from "../../pages/Edit";
import { editTil, updateTil } from "../../redux/modules/tils";

function Detail({ tils }) {
  const { id, title, content, clock, isEdit } = tils;

  const data = useSelector((state) => state.til_list.tils);
  console.log("ttt", data);

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    clock: "",
  });

  // dispatch
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  // navigate funciton(-> edit page)
  const toEdit = (id) => {
    // 데이터 전달
    navigate(`/edit/${id}`);
  };

  // edit function
  const onEdit = (id) => {
    dispatch(editTil(id));
    console.log("DDd", isEdit);

    if (isEdit) {
      console.log("DDd");
      dispatch(updateTil(id, data.title, data.content, data.clock));
    } else {
    }
  };

  // update data funciton
  const onUpdate = (id) => {
    dispatch(updateTil(id, data.title, data.content, data.clock));
  };

  // onChange function
  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        {isEdit ? (
          <div>
            <input name="title" value={data.title} onChange={onChange} />
            <input name="content" value={data.content} onChange={onChange} />
            <input name="clock" value={data.clock} onChange={onChange} />
          </div>
        ) : (
          <div>
            <div>ID : {id}</div>
            <div>{title}</div>
            <div>{content}</div>
            <div>{clock}</div>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        이전페이지
      </button>
      <button onClick={() => onEdit(id)}>{isEdit ? "적용" : "수정"}</button>
    </>
  );
}

export default Detail;
