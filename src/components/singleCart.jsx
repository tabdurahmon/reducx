// react
import { useEffect, useState } from "react";

// features
import { incrementOrder, decrementOrder } from "../features/dessertsSlice";

// dispatch
import { useDispatch } from "react-redux";

// images
import addToCartImg from "../../public/assets/images/icon-add-to-cart.svg";
import incrementIcon from "../../public/assets/images/icon-increment-quantity.svg";
import decrementIcon from "../../public/assets/images/icon-decrement-quantity.svg";

function SingleCart({ dessert }) {
  const dispatch = useDispatch();
  const [addButtons, setAddButtons] = useState(false);

  useEffect(() => {
    if (dessert.amount == 0) {
      setAddButtons(false);
    }
  }, [dessert.amount]);
  return (
    <li key={dessert.id} className="flex flex-col gap-4">
      <div className="flex flex-col items-center">
        <img
          className="rounded-lg border-spacing-2 border-transparent"
          src={dessert.image.desktop}
          alt={dessert.name}
          width={250}
          height={240}
        />
        {!addButtons && (
          <button
            className="flex items-center justify-between py-3 px-7 font-semibold text-[14px] rounded-[999px] btn-border leading-4 gap-2 mt-[-22px] bg-white transition-all hover:border-red-700 text-red-700"
            onClick={() => {
              setAddButtons(true);
              dispatch(incrementOrder(dessert.id));
            }}
          >
            <img src={addToCartImg} alt="Cart" className="w-5 h-5" />
            Add to Cart
          </button>
        )}
        {addButtons && (
          <div className="px-3 py-[10.5px] flex items-center justify-between gap-[43px] bg-red-700 rounded-[999px] mt-[-22px]">
            <button onClick={() => dispatch(decrementOrder(dessert.id))}>
              <img src={decrementIcon} alt="Btn" className="w-5 h-5" />
            </button>
            <span className="text-white">{dessert.amount}</span>
            <button onClick={() => dispatch(incrementOrder(dessert.id))}>
              <img src={incrementIcon} alt="Btn" className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-[14px] leading-[18px] text-yellow-700">
          {dessert.category}
        </p>
        <h2 className="font-semibold text-base">{dessert.name}</h2>
        <p className="font-semibold text-base text-red-700">${dessert.price}</p>
      </div>
    </li>
  );
}

export default SingleCart;
