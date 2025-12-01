import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import Button from "../components/Button";
import Header from "../components/Header";
import DiaryList from "../components/DiaryList";

const getMothlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  // 이전달에 마지막날로 설정
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    0,
    0,
    0
  );
  return data.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const mothlyData = getMothlyData(pivotDate, data);

  const onIncreseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreseMonth} />}
      />
      <DiaryList data={mothlyData} />
    </div>
  );
};

export default Home;
