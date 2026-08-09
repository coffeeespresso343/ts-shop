import { useMemo, useState } from "react";
import type { ProductCategory } from "../types/Product";
import { fetchProducts } from "../api/products";
import { useFetch } from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorNotice from "../components/ErrorNotice";

type CategoryFilter = ProductCategory | "all";

const FILTERS: { label: string; value: CategoryFilter }[] = [
  { label: "All", value: "all" },
  { label: "Tools", value: "tools" },
  { label: "Lighting", value: "lighting" },
  { label: "Storage", value: "storage" },
  { label: "Wearables", value: "wearables" },
];

const Home = () => {
  const state = useFetch(fetchProducts, []);
  const addItem = () => {
    //To add later
    console.log("Added");
  };
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const filteredProducts = useMemo(() => {
    if (state.status !== "success") return [];
    if (filter === "all") return state.data;
    return state.data.filter((p) => p.category === filter);
  }, [state, filter]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Field-tested gear
        </h1>
        <p className="mt-1 text-sm text-paper-dim">
          Built to get scratched up, not replaced.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`font-catalog rounded-full border px-3 py-1.5 text-xs uppercase tracking-wider transition-colors ${
              filter === f.value
                ? "border-amber text-amber"
                : "border-border text-paper-dim hover:border-paper-dim"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {state.status === "loading" && <Loader />}
      {state.status === "error" && <ErrorNotice message={state.error} />}

      {state.status === "success" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
