import type React from "react";
import type { CartItem } from "../types/Product";

interface CartRowProps {
  item: CartItem;
  onQuantityChange: (quantity: number) => void;
  onRemove: () => void;
}
const CartRow = ({ item, onQuantityChange, onRemove }: CartRowProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onQuantityChange(Number.isNaN(value) ? 0 : value);
  };

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4">
      <div
        className="h-14 w-14 shrink-0 rounded"
        style={{ backgroundColor: item.product.imageColor }}
      >
        <img
          src={item.product.imageUrl}
          alt={item.product.name}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>

      <div className="flex-1">
        <p className="font-medium">{item.product.name}</p>
        <p className="font-catalog text-xs text-paper-dim">
          ${item.product.price} each
        </p>
      </div>

      <input
        type="number"
        min={0}
        value={item.quantity}
        onChange={handleChange}
        className="font-catalog text-sm w-14 rounded border border-border bg-ink px-2 py-1.5 text-center"
      />

      <button
        type="button"
        onClick={onRemove}
        className="font-catalog text-xs uppercase tracking-wider text-rust hover:text-paper-dim"
      >
        Remove
      </button>
    </div>
  );
};

export default CartRow;
