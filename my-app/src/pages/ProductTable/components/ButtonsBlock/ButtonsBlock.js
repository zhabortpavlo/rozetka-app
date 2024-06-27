import TableButton from "../../../../components/TableButton/TableButton";
import "./ButtonsBlock.css";
import UserIcon from "../../../../assets/svg/UserIcon";
import PlusSign from "../../../../assets/svg/PlusSign";

const ButtonsBlock = () => {
  return (
    <div className="buttons-block">
      <TableButton icon={<UserIcon />} title={"Prewiev"} />
      <TableButton icon={<PlusSign />} title={"Add product"} />
    </div>
  );
};

export default ButtonsBlock;
