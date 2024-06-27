import ButtonsBlock from "./components/ButtonsBlock/ButtonsBlock";
import Header from "./components/Header/Header";
import MainTable from "./components/MainTable/MainTable";
import "./MainTablePage.css";

const MainTablePage = () => {
  return (
    <div className="main-block">
      <Header />
      <ButtonsBlock />
      <MainTable />
    </div>
  );
};

export default MainTablePage;
