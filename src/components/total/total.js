import { useContext } from "react";
import { Context } from "../../context/context";
const Total = () => {
  const items = useContext(Context);
  const total = items.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );
  // for (let i = 0; i < items.length; i++) {
  //     total += parseFloat(items[i].price) * items[i].quantity

  //   }
  return (
    <div>
      <p className="text">Total Price: {total}</p>
    </div>
  );
};
export default Total;