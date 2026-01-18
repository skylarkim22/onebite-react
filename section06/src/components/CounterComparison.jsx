import React, { useState, useRef } from "react";

function CounterComparison() {
  const [renderCount, setRenderCount] = useState(0);

  // 1. useRef 사용: 컴포넌트가 재시작되어도 값이 유지됨
  const myRef = useRef(0);

  // 2. 일반 변수 사용: 리렌더링될 때마다 다시 0으로 초기화됨
  let myLet = 0;

  const increaseValues = () => {
    myRef.current++;
    myLet++;

    console.log("Ref 값:", myRef.current);
    console.log("Let 값:", myLet);

    // UI를 업데이트하기 위해 상태 변경 (리렌더링 유발)
    setRenderCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      <h3>리렌더링 횟수: {renderCount}</h3>
      <p>
        Ref 값 (유지됨): <strong>{myRef.current}</strong>
      </p>
      <p>
        Let 값 (초기화됨): <strong>{myLet}</strong>
      </p>

      <button onClick={increaseValues}>값 증가 및 리렌더링</button>
    </div>
  );
}

export default CounterComparison;
