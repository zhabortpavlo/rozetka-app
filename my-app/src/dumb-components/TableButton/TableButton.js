import "./TableButton.css";

const TableButton = ({ title, icon }) => {
  return (
    <button className="TableButton">
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default TableButton;
