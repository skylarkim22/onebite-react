import Button from "../components/Button";
import Header from "../components/Header";
const Home = () => {
  return (
    <div>
      <Header
        title={"2025년 2월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
    </div>
  );
};

export default Home;
