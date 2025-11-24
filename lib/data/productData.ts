export interface ProductItem {
  id: number;
  name: string;
  category: "Electronics" | "Clothing" | "Home" | "Books" | "Toys";
  price: number;
  in_stock: boolean;
  rating: number;
  created_at: string;
  description: string;
}
