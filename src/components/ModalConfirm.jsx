// images
import Correct from "../../public/assets/images/icon-order-confirmed.svg";

// redux
import { useDispatch, useSelector } from "react-redux";

function ModalConfirm({ modal, setModal }) {
  const dispatch = useDispatch();
  const { ordered, orderTotal, clearOrder } = useSelector(
    (state) => state.orders
  );
  const clear = [];
  return (
    <div className="bg-white  rounded-xl p-10 flex flex-col">
      <img src={Correct} alt="" className="mb-6 w-12 h-12" />
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="font-bold text-4xl">Order Confirmed</h1>
        <p className="text-base text-orange-500">
          We hope you enjoy your food!
        </p>
      </div>
      <div className="bg-zinc-100 p-6 rounded-lg">
        <ul className="gap-6 ">
          {ordered &&
            ordered.map((order) => {
              return (
                <li key={order.id} className="w-full flex flex-col gap-4 mb-4">
                  <div className="flex items-center justify-between w-full gap-10">
                    <img src={order.image.thumbnail} alt="" />
                    <div className="flex flex-col gap-2 w-full">
                      <h2 className="font-semibold text-base ">{order.name}</h2>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold text-sm  text-red-700">
                          {order.amount}x
                        </p>
                        <p className="text-base  text-red-400">
                          @ ${order.price}
                        </p>
                        <p className="text-base  text-red-400 font-semibold"></p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold">
                      ${order.price * order.amount}
                    </h3>
                  </div>
                  <div className="w-full h-[1px] bg-slate-300"></div>
                </li>
              );
            })}
        </ul>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Order Total</h2>
          <h1 className="text-2xl font-bold">${orderTotal}</h1>
        </div>
      </div>
      <button
        onClick={() => {
          setModal(!modal);
          ordered.map((order) => {
            return clear.push(order);
          });
        }}
        className="bg-orange-600 py-4 rounded-full text-white font-semibold text-base mt-8"
      >
        Start New Order
      </button>
    </div>
  );
}

export default ModalConfirm;
