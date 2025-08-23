import AppLayout from "@/components/applayout";
import WhitePaperPage from "@/components/pages/whitepaper/whitepaper";

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <WhitePaperPage />
    </AppLayout>
  );
}