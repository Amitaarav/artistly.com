import { Navbar } from "@/components/HomepageComponents/headersection/Navbar";
import { HomePage }from "@/components/HomepageComponents/herosection/homepage";
import { FooterSection } from "@/components/HomepageComponents/footersection/footer";

export const metadata = {
  title: "Artistly – Discover & Book Talented Performing Artists",
  description: "Browse, onboard, and manage artists effortlessly. Connect event planners and performers via Artistly.",
  keywords: "Artist booking, event planner, Indian artists, hire DJ, hire singer, nextjs app",
  openGraph: {
    title: "Artistly – Discover & Book Talented Performing Artists",
    description: "Platform for managing and booking performing artists",
    url: "https://artistly-com-abof.vercel.app/",
    siteName: "Artistly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Artistly Open Graph Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistly – Discover & Book Talented Performing Artists",
    description: "Book musicians, DJs, comedians and more. All in one place.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-violet-900 h-screen">
      <Navbar/>
      <HomePage/>
      <FooterSection/>
    </div>
  );
}
