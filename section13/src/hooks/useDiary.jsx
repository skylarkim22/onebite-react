import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);

  const nav = useNavigate();
  const [currentDiaryItem, setCurrentDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find((d) => String(d.id) === String(id));

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiaryItem(currentDiaryItem);
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
