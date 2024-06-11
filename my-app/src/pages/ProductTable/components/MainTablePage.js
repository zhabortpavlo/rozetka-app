import ButtonsBlock from "./ButtonsBlock/ButtonsBlock";
import Header from "./Header/Header";
import MainTable from "./MainTable/MainTable";
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
