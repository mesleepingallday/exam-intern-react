import { useCart } from "../context/CartContext";
import { useRef } from "react";
import { CartItem } from "./CartItem";

export const CartModal = () => {
  const { items } = useCart();
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={modalRef}
      className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-96 z-50"
    >
      {items.length === 0 ? (
        <div className="p-4 text-center">
          <p className="text-gray-500">Giỏ hàng trống</p>
        </div>
      ) : (
        <div className="max-h-80 overflow-y-auto p-1">
          {items.map((item) => (
            <CartItem key={item.name} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};
