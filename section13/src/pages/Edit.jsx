import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Editor from "../components/Editor";
import Button from "../components/Button";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const targetId = params.id;
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(targetId);

  const handlerDelete = () => {
    const isConfirm = window.confirm("일기를 정말 삭제할까요?");
    if (!targetId || !isConfirm) return;
    onDelete(targetId);
    nav("/", { replace: true });
  };

  const handlerSubmit = (input) => {
    if (!window.confirm("일기를 정말 수정할까요?")) return;

    onUpdate(
      targetId,
      input.createdDate.getTime(),
      input.emotionId,
      input.content,
    );
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={handlerDelete} />
        }
      />
      <Editor onSubmit={handlerSubmit} initData={currentDiaryItem} />
    </div>
  );
};

export default Edit;
