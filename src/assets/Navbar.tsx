import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalCount } = useCart();
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">
            Fieldstock
          </span>
          <span className="font-catalog text-xs text-paper-dim">
            /tools &amp; gear
          </span>
        </Link>

        <Link
          to="/cart"
          className="font-catalog flex items-center gap-2 rounded border border-border px-3 py-1.5 text-sm transition-colors hover:border-amber"
        >
          <span>CART</span>
          <span className="rounded-full bg-amber px-2 py-0.5 text-xs text-ink">
            {totalCount}
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
