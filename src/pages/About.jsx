import React from "react";
import { useSelector } from "react-redux";
import Detail from "../components/detail/Detail";
import { useParams } from "react-router-dom";

function About() {
  const { tils } = useSelector((state) => state.til_list);

  // 페이지 상세 값 확인하기
  const param = useParams();
  console.log("param", param);
  // 형변환 시키기
  const page_id = Number(param.id);
  console.log(page_id);

  return (
    <>
      <div>About 페이지 입니다.</div>
      <div>
        {tils
          .filter((til) => til.id === page_id)
          .map((til) => (
            <Detail key={til.id} tils={til} />
          ))}
      </div>
    </>
  );
}

export default About;
