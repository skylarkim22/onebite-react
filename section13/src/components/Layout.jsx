import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/");
  };
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <button onClick={onClickButton}>go home</button>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
