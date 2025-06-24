import Image from "next/image";
import { Navbar } from "@/components/HomepageComponents/headersection/Navbar";
import { HomePage }from "@/components/HomepageComponents/herosection/homepage";
import { FooterSection } from "@/components/HomepageComponents/footersection/footer";
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-violet-900 h-screen">
      <Navbar/>
      <HomePage/>
      <FooterSection/>
    </div>
  );
}
