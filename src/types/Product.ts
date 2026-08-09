export interface Product {
  id: number;
  sku: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  spec: string;
  imageColor: string;
  imageUrl: string;
  inStock: boolean;
}

export type ProductCategory = "tools" | "lighting" | "storage" | "wearables";

export interface CartItem {
  product: Product;
  quantity: number;
}
