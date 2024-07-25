import React from "react";
import { useDispatch } from "react-redux";
import { incrementOrder, decrementOrder } from "./features/dessertSlice";

function DessertCard({ dessert, addButton, handleAddToCart }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementOrder(dessert.id));
  };

  const handleDecrement = () => {
    dispatch(decrementOrder(dessert.id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h3 className="text-2xl font-bold mb-2">{dessert.name}</h3>
      {!addButton[dessert.id] ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleAddToCart(dessert.id)}
        >
          Add To Cart
        </button>
      ) : (
        <div className="flex items-center">
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="mx-2">{dessert.amount}</span>
          <button
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default DessertCard;
