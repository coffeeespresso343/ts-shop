import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchProductById } from "../api/products";
import Loader from "../components/Loader";
import ErrorNotice from "../components/ErrorNotice";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);

  const state = useFetch(() => fetchProductById(productId), [productId]);

  if (state.status === "loading") return <Loader label="Loading item..." />;
  if (state.status === "error") return <ErrorNotice message={state.error} />;
  if (state.status === "success" && !state.data) {
    return <ErrorNotice message={`No product found with id ${productId}`} />;
  }
  const product = state.status === "success" ? state.data : null;
  if (!product) return null;

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <Link
        to="/"
        className="font-catalog mb-6 inline-block text-xs tracking-wider uppercase text-paper-dim hover:text-amber"
      >
        Back to catalog
      </Link>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div
          className="h-64 flex items-center justify-center rounded-lg"
          style={{ backgroundColor: product.imageColor }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="font-catalog mt-1 text-sm text-paper-dim">
              {product.name}
              <p className="font-catalog mt-1 text-sm text-paper-dim">
                {product.spec}
              </p>
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-paper-dim">
            {product.description}
          </p>

          {product.inStock ? (
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                className="font-catalog w-16 rounded border border-border bg-surface px-2 py-2 text-center text-sm"
              />
              <button className="font-catalog flex-1 rounded border border-amber py-2 text-shadow-2xs uppercase transition-colors hover:bg-amber hover:text-ink">
                Add to cart
              </button>
            </div>
          ) : (
            <span className="font-catalog w-fit rounded border border-rust px-3 py-1.5 uppercase text-xs tracking-wider text-rust">
              Out of stock
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
