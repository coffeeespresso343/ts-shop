import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartRow from "../components/CartRow";

const Cart = () => {
  const { items, totalPrice, setQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="mt-16 mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="font-catalog text-xs uppercase tracking-widest text-paper-dim">
          You cart is empty
        </p>

        <Link
          to="/"
          className="mt-4 inline-block rounded border border-amber px-4 py-2 text-sm hover:text-ink hover:bg-amber transition-colors duration-200 cursor-pointer"
        >
          Browse the catalog
        </Link>
      </div>
    );
  }
  return (
    <div className="mt-16 mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-6 text-xl font-semibold">Your Cart</h1>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <CartRow
            key={item.product.id}
            item={item}
            onQuantityChange={(qty) => setQuantity(item.product.id, qty)}
            onRemove={() => removeItem(item.product.id)}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <button
          type="button"
          onClick={clearCart}
          className="font-catalog text-xs uppercase tracking-wider text-paper-dim hover:text-rust"
        >
          Clear cart
        </button>
        <p className="font-catalog text-lg text-amber">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
