import type { Product } from "../types/Product";

const CATALOG: Product[] = [
  {
    id: 1,
    sku: "FS-0142",
    name: "Ridge Multi-Tool",
    category: "tools",
    price: 48,
    description:
      "A 12-function multi-tool built for the field: pliers, blade, wire cutter, and driver bits in one folding body.",
    spec: "Stainless / 210g / Locking hinge",
    imageColor: "#8a7a5c",
    imageUrl:
      "https://res.cloudinary.com/fleetfarm-dam/image/upload/b_rgb%3AFFFFFF%2Cc_pad%2Cdpr_2.0%2Cf_auto%2Ch_400%2Cq_auto%2Cw_400/c_pad%2Ch_400%2Cw_400/v1/SKU_Assets/101858053?pgw=1",
    inStock: true,
  },

  {
    id: 2,
    sku: "FS-0177",
    name: "Beacon Headlamp",
    category: "lighting",
    price: 34,
    description:
      "Rechargeable headlamp with three brightness modes and a red night-vision setting. Runs 40 hours on low.",
    spec: "400 lumens / USB-C / IP54",
    imageColor: "#d9a441",
    imageUrl:
      "https://images.fyndiq.se/images/f_auto/t_600x600/prod/07c7d7cd281141b6/c1f85c7181dd/huvudlampa-uppladdningsbar-pannlampa-med-5-lampor-6-lagen-vattentat-8000l-led-handsfree-lampa-superljus-for-lopning-camping-fiske-hundpromenader",
    inStock: true,
  },

  {
    id: 3,
    sku: "FS-0203",
    name: "Cache Dry Bag 20L",
    category: "storage",
    price: 39,
    description:
      "Roll-top dry bag that keeps gear sealed against rain and river crossings. Welded seams, no stitching to leak.",
    spec: "20L / 420D nylon / Roll-top",
    imageColor: "#3c5a4a",
    imageUrl:
      "https://pisces.bbystatic.com/image/upload/f_auto,q_auto/v1/BestBuy_US/images/products/1230/12309163_sd.jpg",
    inStock: true,
  },

  {
    id: 4,
    sku: "FS-0088",
    name: "Marrow Pocket Knife",
    category: "tools",
    price: 56,
    description:
      "A slim everyday-carry knife with a drop-point blade and a frame lock that's easy to open one-handed.",
    spec: "D2 steel / 78g / Frame lock",
    imageColor: "#5c5c5c",
    imageUrl:
      "https://allemesser.de/media/image/product/34479/lg/manly-peak-d2-black-taschenmesser-two-hand-g10-griff~2.jpg",
    inStock: false,
  },

  {
    id: 5,
    sku: "FS-0311",
    name: "Lantern Puck",
    category: "lighting",
    price: 22,
    description:
      "A collapsible lantern that packs flat and pops up to throw soft, even light across a whole tent.",
    spec: "150 lumens / Solar + USB-C / 90g",
    imageColor: "#c15f3c",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0506/5893/4942/files/52_76f11590-494e-4045-aab6-0f33e5169a00.png?v=1751822506",
    inStock: true,
  },

  {
    id: 6,
    sku: "FS-0056",
    name: "Traverse Belt Bag",
    category: "storage",
    price: 28,
    description:
      "A low-profile hip bag sized for a phone, keys, and a snack. Stays put whether you're hiking or commuting.",
    spec: "2L / Water-resistant / Adjustable",
    imageColor: "#7a6a8a",
    imageUrl:
      "https://item.elandrs.com/r/image/item/2023-09-05/c8bc5bb3-43a6-41a9-8091-8afce5f4f762.jpg?h=&q=100&w=750",
    inStock: true,
  },

  {
    id: 7,
    sku: "FS-0429",
    name: "Compass Watch Band",
    category: "wearables",
    price: 19,
    description:
      "A quick-release watch band with a built-in analog compass set into the buckle. Fits most 22mm watches.",
    spec: "Nylon / 22mm / Steel buckle",
    imageColor: "#4a6a7a",
    imageUrl:
      "https://militarywatchexchange.com/image/cache/catalog/products/watch-bands/nylon-compass-watch-strap-22mm-1000x1000.jpg",
    inStock: true,
  },

  {
    id: 8,
    sku: "FS-0365",
    name: "Grip Work Gloves",
    category: "wearables",
    price: 24,
    description:
      "Reinforced palm gloves for camp chores and repair work, with touchscreen-friendly fingertips.",
    spec: "Synthetic leather / M–XL / Breathable",
    imageColor: "#9c8a5c",
    imageUrl: "https://products.blains.com/600/159/1597671.jpg",
    inStock: true,
  },

  {
    id: 9,
    sku: "FS-0142",
    name: "Ridge Multi-Tool",
    category: "tools",
    price: 48,
    description:
      "A 12-function multi-tool built for the field: pliers, blade, wire cutter, and driver bits in one folding body.",
    spec: "Stainless / 210g / Locking hinge",
    imageColor: "#8a7a5c",
    imageUrl:
      "https://res.cloudinary.com/fleetfarm-dam/image/upload/b_rgb%3AFFFFFF%2Cc_pad%2Cdpr_2.0%2Cf_auto%2Ch_400%2Cq_auto%2Cw_400/c_pad%2Ch_400%2Cw_400/v1/SKU_Assets/101858053?pgw=1",
    inStock: true,
  },

  {
    id: 10,
    sku: "FS-0177",
    name: "Beacon Headlamp",
    category: "lighting",
    price: 34,
    description:
      "Rechargeable headlamp with three brightness modes and a red night-vision setting. Runs 40 hours on low.",
    spec: "400 lumens / USB-C / IP54",
    imageColor: "#d9a441",
    imageUrl:
      "https://images.fyndiq.se/images/f_auto/t_600x600/prod/07c7d7cd281141b6/c1f85c7181dd/huvudlampa-uppladdningsbar-pannlampa-med-5-lampor-6-lagen-vattentat-8000l-led-handsfree-lampa-superljus-for-lopning-camping-fiske-hundpromenader",
    inStock: true,
  },

  {
    id: 11,
    sku: "FS-0203",
    name: "Cache Dry Bag 20L",
    category: "storage",
    price: 39,
    description:
      "Roll-top dry bag that keeps gear sealed against rain and river crossings. Welded seams, no stitching to leak.",
    spec: "20L / 420D nylon / Roll-top",
    imageColor: "#3c5a4a",
    imageUrl:
      "https://pisces.bbystatic.com/image/upload/f_auto,q_auto/v1/BestBuy_US/images/products/1230/12309163_sd.jpg",
    inStock: true,
  },

  {
    id: 12,
    sku: "FS-0088",
    name: "Marrow Pocket Knife",
    category: "tools",
    price: 56,
    description:
      "A slim everyday-carry knife with a drop-point blade and a frame lock that's easy to open one-handed.",
    spec: "D2 steel / 78g / Frame lock",
    imageColor: "#5c5c5c",
    imageUrl:
      "https://allemesser.de/media/image/product/34479/lg/manly-peak-d2-black-taschenmesser-two-hand-g10-griff~2.jpg",
    inStock: false,
  },

  {
    id: 13,
    sku: "FS-0311",
    name: "Lantern Puck",
    category: "lighting",
    price: 22,
    description:
      "A collapsible lantern that packs flat and pops up to throw soft, even light across a whole tent.",
    spec: "150 lumens / Solar + USB-C / 90g",
    imageColor: "#c15f3c",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0506/5893/4942/files/52_76f11590-494e-4045-aab6-0f33e5169a00.png?v=1751822506",
    inStock: true,
  },

  {
    id: 14,
    sku: "FS-0056",
    name: "Traverse Belt Bag",
    category: "storage",
    price: 28,
    description:
      "A low-profile hip bag sized for a phone, keys, and a snack. Stays put whether you're hiking or commuting.",
    spec: "2L / Water-resistant / Adjustable",
    imageColor: "#7a6a8a",
    imageUrl:
      "https://item.elandrs.com/r/image/item/2023-09-05/c8bc5bb3-43a6-41a9-8091-8afce5f4f762.jpg?h=&q=100&w=750",
    inStock: true,
  },

  {
    id: 15,
    sku: "FS-0429",
    name: "Compass Watch Band",
    category: "wearables",
    price: 19,
    description:
      "A quick-release watch band with a built-in analog compass set into the buckle. Fits most 22mm watches.",
    spec: "Nylon / 22mm / Steel buckle",
    imageColor: "#4a6a7a",
    imageUrl:
      "https://militarywatchexchange.com/image/cache/catalog/products/watch-bands/nylon-compass-watch-strap-22mm-1000x1000.jpg",
    inStock: true,
  },

  {
    id: 16,
    sku: "FS-0365",
    name: "Grip Work Gloves",
    category: "wearables",
    price: 24,
    description:
      "Reinforced palm gloves for camp chores and repair work, with touchscreen-friendly fingertips.",
    spec: "Synthetic leather / M–XL / Breathable",
    imageColor: "#9c8a5c",
    imageUrl: "https://products.blains.com/600/159/1597671.jpg",
    inStock: true,
  },
];

function delay<T>(value: T, ms: number): Promise<T> {
  return new Promise((reslove) => setTimeout(() => reslove(value), ms));
}

export async function fetchProducts(): Promise<Product[]> {
  return delay(CATALOG, 700);
}

export async function fetchProductById(id: number): Promise<Product | null> {
  const found = CATALOG.find((p) => p.id === id) ?? null;
  return delay(found, 500);
}
