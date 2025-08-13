import AppLayout from "@/components/applayout";
import HomePage from "@/components/pages/home/HomePage";

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <HomePage />
    </AppLayout>
  );
}
