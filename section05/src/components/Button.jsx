// 자식요소를 children으로 받을수 있다. 컴포넌도 자식 요소로 넣을수가 있다.
const Button = ({ children, text, color = "black" }) => {
  const onClickButton = () => {
    console.log(text);
  };

  return (
    <button style={{ color }} onClick={onClickButton}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
