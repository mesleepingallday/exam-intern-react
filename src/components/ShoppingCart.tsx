import { useState } from "react";
import { useCart } from "../context/CartContext";
import { CartModal } from "./CartModal";

const Badge = ({ count }: { count: number }) => {
  return (
    <div className="bg-red-500 text-white rounded-full size-8 flex items-center justify-center text-xs absolute -top-3 -right-3">
      {count}
    </div>
  );
};

export const ShoppingCart = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = getCartCount();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-2 relative">
      <div className="flex items-center justify-end">
        {cartCount > 0 && <Badge count={cartCount} />}
      </div>
      <button
        onClick={toggleCart}
        className="flex items-center cursor-pointer hover:text-gray-700"
      >
        <p className="mr-2">Giỏ hàng</p>
        <img
          src="/images/cart.svg"
          alt="shopping cart icon"
          className="size-6"
        />
      </button>

      {isCartOpen && <CartModal />}
    </div>
  );
};
