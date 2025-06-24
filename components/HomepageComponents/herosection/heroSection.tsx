import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Shreya } from "@/assets/artistsImages"

export function HeroSection() {
  return (
    <section className="dark:bg-slate-500 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold dark:text-gray-200 mb-6">
              Book Amazing
              <span className="dark:text-gray-200"> Performing Artists</span>
            </h1>
            <p className="text-xl dark:text-gray-300 mb-8 leading-relaxed">
              Connect with talented singers, dancers, musicians, and DJs. Find the perfect entertainment for your
              events with our curated platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/artists">
                  Explore Artists
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/onboarding">Join as Artist</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Shreya}
              alt="Artists performing on stage"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
