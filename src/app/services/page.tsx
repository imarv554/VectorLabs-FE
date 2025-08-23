import AppLayout from "@/components/applayout";
import ServicesPage from "@/components/pages/services/services";

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <ServicesPage />
    </AppLayout>
  );
}