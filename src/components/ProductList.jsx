// react
import { useEffect, useState } from "react";

// components
import SingleCart from "./SingleCart";

// redux
import { useDispatch, useSelector } from "react-redux";

// features
import { addAllDeserts } from "../features/dessertsSlice";

function ProductList() {
  const dispatch = useDispatch();
  const { allDeserts } = useSelector((state) => state.orders);

  useEffect(() => {
    fetch(
      "https://online-json-server-api.up.railway.app/project/66a0efd31d2cd3eb114435f8/desserts"
    )
      .then((data) => data.json())
      .then((desserts) => dispatch(addAllDeserts(desserts.data)));
  }, []);
  return (
    <div className="max-w-4xl">
      <h1 className="text-[40px] font-bold mb-8">Desserts</h1>
      <ul className="grid grid-cols-3 gap-x-6 gap-y-8">
        {allDeserts &&
          allDeserts.map((dessert) => {
            return <SingleCart dessert={dessert} key={dessert.id} />;
          })}
      </ul>
    </div>
  );
}

export default ProductList;
