import { formatPrice } from "../../utils/formatPrice";
import { useCart } from "../context/CartContext";
import { Product } from "../types/Product";
import { useState } from "react";

export const ProductItem = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
    }, 200);
  };
  return (
    <div
      key={product.name}
      className="flex flex-col p-2 pb-3 rounded-sm hover:bg-[#f9f9f9]"
    >
      <img
        src={product.image}
        alt={product.name}
        title={product.name}
        className="size-[300px] object-cover rounded-lg mb-2"
      />
      <div className="flex flex-row justify-between items-center  p-2 transition duration-200 ease-in-out">
        <div className="flex items-start flex-col">
          <p className="text-gray-900 font-semibold text-xl">{product.name}</p>
          <p className="">{formatPrice(product.price)}</p>
        </div>

        <button
          onClick={handleAddToCart}
          className="px-5 py-3 rounded-lg cursor-pointer transition duration-200 ease-in-out"
        >
          <img
            src="/images/cart-bold.svg"
            alt="shopping cart icon"
            className="size-6"
          />
        </button>
      </div>
    </div>
  );
};
