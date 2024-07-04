import "./TableButton.css";

const TableButton = ({ title, icon, onClick }) => {
  return (
    <button className="TableButton" onClick={onClick}>
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default TableButton;
