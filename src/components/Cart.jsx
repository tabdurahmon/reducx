// redux
import { useSelector } from "react-redux";

// components
import ModalConfirm from "./ModalConfirm";

// images
import deleteBtn from "../../public/assets/images/icon-remove-item.svg";
import Tree from "../../public/assets/images/icon-carbon-neutral.svg";

// react
import { useState } from "react";

function Cart() {
  const [modal, setModal] = useState(false);
  const { ordered, totalProducts, orderTotal } = useSelector(
    (state) => state.orders
  );

  return (
    <div className="p-6 rounded-xl flex flex-col gap-6 bg-white max-w-[384px] w-full h-min">
      <h1 className="font-bold text-2xl text-red-700">
        Your cart ({totalProducts})
      </h1>
      <ul className="gap-6">
        {ordered &&
          ordered.map((order) => {
            return (
              <li key={order.id} className="w-full flex flex-col gap-4 mb-4">
                <div className="flex items-center justify-between w-full gap-10">
                  <div className="flex flex-col gap-3 w-full">
                    <h2 className="font-semibold text-2xl ">{order.name}</h2>
                    <div className="flex items-center gap-4">
                      <p className="font-semibold text-lg  text-red-700">
                        {order.amount}x
                      </p>
                      <p className="text-lg  text-red-400">@ ${order.price}</p>
                      <p className="text-lg  text-red-400 font-semibold">
                        ${order.price * order.amount}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      ordered.find((dessert) => {
                        if (dessert.id == order.id) {
                        }
                      })
                    }
                    className="border-spacing-1 border-red-700"
                  >
                    <img
                      className="w-5 h-5"
                      src={deleteBtn}
                      alt="Delete button"
                    />
                  </button>
                </div>
                <div className="w-full h-[1px] bg-slate-300"></div>
              </li>
            );
          })}
      </ul>
      <div className="flex justify-between items-center">
        <h2 className="text-lg">Order Total</h2>
        <h1 className="text-2xl font-bold">${orderTotal}</h1>
      </div>

      <button
        onClick={() => setModal(!modal)}
        className="bg-orange-600 py-4 rounded-full text-white font-semibold text-base"
      >
        Confirm Order
      </button>

      {modal && (
        <div className="min-h-screen min-w-full fixed top-0 left-0 bottom-0  bg-over">
          <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <ModalConfirm setModal={setModal} modal={modal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
