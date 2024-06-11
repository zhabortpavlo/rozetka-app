import "./MainTable.css";
import PencilIcon from "../../../../assets/svg/PencilIcon";
import TrashIcon from "../../../../assets/svg/TrashIcon";

const MainTable = () => {
  const data = [
    {
      id: 0,
      category: "PC",
      name: "Lenovo Y50-70",
      quantity: 5,
      price: "25,000.00",
      icon: <PencilIcon />,
      icon2: <TrashIcon />,
    },
    {
      id: 1,
      category: "Clothes",
      name: "Nike M Nk Df Acd21",
      quantity: 22,
      price: "4,000.00",
      icon: <PencilIcon />,
      icon2: <TrashIcon />,
    },
    {
      id: 2,
      category: "Plumbing",
      name: "CERSANIT MITO 17",
      quantity: 1337,
      price: "5,000.00",
      icon: <PencilIcon />,
      icon2: <TrashIcon />,
    },
  ];

  return (
    <div className="table-block">
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price (₴)</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {Object.values(row).map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
