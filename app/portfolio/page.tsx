import TopBar from "@/components/TopBar";
import PortfolioGrid from "@/components/PortfolioGrid";
import ContactFooter from "@/components/ContactFooter";

export const metadata = {
  title: "Portfolio — Duc Le",
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <TopBar />
      <PortfolioGrid />
      <ContactFooter />
    </main>
  );
}
