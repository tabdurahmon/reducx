import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  incrementOrder,
  decrementOrder,
  addAllDesserts,
} from "./features/dessertSlice";
import DessertCard from "./DessertCard";

function ProductsList() {
  const [desserts, setDesserts] = useState([]);
  const [addButton, setAddButton] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://online-json-server-api.up.railway.app/project/66a0e94a1d2cd3eb1144357f/desserts"
    )
      .then((response) => response.json())
      .then((data) => {
        setDesserts(data.data);
        dispatch(addAllDesserts(data.data));
      });
  }, [dispatch]);

  const handleAddToCart = (id) => {
    setAddButton((prevState) => ({ ...prevState, [id]: true }));
    dispatch(incrementOrder(id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Desserts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {desserts.map((dessert) => (
          <DessertCard
            key={dessert.id}
            dessert={dessert}
            addButton={addButton}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
