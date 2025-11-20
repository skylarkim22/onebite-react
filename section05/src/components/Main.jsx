/**
 * JSX 주의사항
 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을수 있다. if문 안됨
 * 2. 숫자, 문자, 배열 값만 노출된다. object 객체는 안됨.
 * 3. 모든 태가는 닫혀있어야한다.
 * 4. 최상위 태그는 반드시 하나여야한다.(마땅한게 없으면 빈태그<></>)
 */

import "./Main.css";

const Main = () => {
  const user = {
    name: "이정현",
    isLogin: false,
  };

  if (user.isLogin) {
    return (
      <div
        style={{
          backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div className="login">로그인</div>;
  }
  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
