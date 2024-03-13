import Division from "@/components/Home/Division";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <HeroSection />
      <Division />
    </main>
  );
}
