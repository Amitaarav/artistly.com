import { ArtistsSections } from "./artistSection";
import { HeroSection } from "./heroSection";
export function HomePage() {
  return (
    <main className="bg-white overflow-hidden">
      <HeroSection />
      <ArtistsSections />
    </main>
  );
}