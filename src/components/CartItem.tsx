import { formatPrice } from "../../utils/formatPrice";
import { CartItem as CartItemType } from "../context/CartContext";

export const CartItem = ({ product }: { product: CartItemType }) => {
  const totalPrice = product.price * product.quantity;

  return (
    <div key={product.name} className="flex p-2">
      <img
        src={product.image}
        alt={product.name}
        className="size-20 object-cover rounded-md mr-3"
      />
      <div className="flex flex-col min-w-0 justify-start items-start gap-3">
        <h3 className="font-medium text-md truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm whitespace-nowrap text-left w-full">
          Thành tiền: {product.price} x {product.quantity} ={" "}
          {formatPrice(totalPrice)}
        </p>
      </div>
    </div>
  );
};
