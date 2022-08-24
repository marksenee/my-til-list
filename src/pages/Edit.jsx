import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Update from "../components/edit/Update";

function Edit() {
  const { tils } = useSelector((state) => state.til_list);

  // 페이지 상세 값 확인하기
  const param = useParams();
  // 형변환
  const page_id = Number(param.id);

  return (
    <>
      <div>Edit 페이지 입니다.</div>
      <div>
        {tils
          .filter((til) => til.id === page_id)
          .map((til) => (
            <Update key={til.id} tils={til} />
          ))}
      </div>
    </>
  );
}

export default Edit;
