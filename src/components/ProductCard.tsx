import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-amber-dim"
    >
      <div
        className="flex h-36 items-center justify-center"
        style={{ backgroundColor: product.imageColor }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium leading-snug">{product.name}</h3>
          <span className="font-catalog shrink-0 text-amber">
            ${product.price}
          </span>
        </div>

        <p className="font-catalog text-xs text-paper-dim">{product.spec}</p>

        {!product.inStock && (
          <span className="font-catalog w-fit rounded border border-rust px-2 py-0.5 text-[10px] uppercase tracking-wider text-rust">
            Out of stock
          </span>
        )}

        <button
          type="button"
          onClick={handleAddClick}
          disabled={!product.inStock}
          className="font-catalog mt-auto rounded bg-amber border border-black py-2 uppercase tracking-wider transition-colors
      enabled:hover:border-amber enabled:hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.inStock ? "Add to cart" : "Unavailable"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
