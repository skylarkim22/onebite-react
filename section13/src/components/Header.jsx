import "./Header.css";
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="Header">
      <div className="left_child">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="right_child">{rightChild}</div>
    </header>
  );
};

export default Header;
