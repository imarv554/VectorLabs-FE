import AppLayout from "@/components/applayout";
import ProductsPage from "@/components/pages/products/products";

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <ProductsPage />
    </AppLayout>
  );
}