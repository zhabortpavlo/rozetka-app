import { Link } from "react-router-dom";
import TableButton from "../../../../components/TableButton/TableButton";
import "./ButtonsBlock.css";
import UserIcon from "../../../../assets/svg/UserIcon";
import PlusSign from "../../../../assets/svg/PlusSign";

const ButtonsBlock = () => {
  return (
    <div className="buttons-block">
      <Link to="/product-preview">
        <TableButton icon={<UserIcon />} title={"Preview"} />
      </Link>
      <TableButton icon={<PlusSign />} title={"Add product"} />
    </div>
  );
};

export default ButtonsBlock;
