import React, { useState } from "react";
import Total from "../total/total";
import AddItem from "../addItem/addItem";
import { Context } from "../../context/context";

const Items = (props) => {
  const { items, del, add } = props;
  const length = items.length;
  const [quantity, setQuantity] = useState(0);

  const handelIncreas = (elem) => {
    let updatedQuantity = items.map((item) =>
      item.id === elem.id ? (item.quantity += 1) : item
    );
    setQuantity(updatedQuantity);
  };
  const handelDecreas = (elem) => {
    if (elem.quantity > 1) {
      let updatedQuantity = items.map((item) =>
        item.id === elem.id ? (item.quantity -= 1) : item
      );
      setQuantity(updatedQuantity);
    } else {
      del(elem.id);
    }
  };

  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p>
            <button
              onClick={() => {
                handelIncreas(item);
              }}
              className="increase"
            >
              +
            </button>
            {item.quantity}
            <button
              onClick={() => {
                handelDecreas(item);
              }}
              className="decrease"
            >
              -
            </button>
          </p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <Context.Provider value={items}>
        <div className="header item">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Edit</p>
        </div>
        {ListItem}
        <AddItem add={add} />
        <Total />
      </Context.Provider>
    </div>
  );
};
export default Items;