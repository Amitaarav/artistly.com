import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Mic,
  Users,
  Guitar,
  Headphones,
  Music,
  Calendar,
  Star,
  MessageSquare,
} from "lucide-react"

const categories = [
  {
    name: "Singers",
    icon: Mic,
    description: "Professional vocalists for all genres",
    count: "150+ Artists",
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Dancers",
    icon: Users,
    description: "Choreographers and dance performers",
    count: "120+ Artists",
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Musicians",
    icon: Guitar,
    description: "Instrumentalists and bands",
    count: "200+ Artists",
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "DJs",
    icon: Headphones,
    description: "Professional DJs and music producers",
    count: "80+ Artists",
    color: "bg-green-100 text-green-600",
  },
]

const features = [
  {
    icon: Music,
    title: "Diverse Talent Pool",
    description: "Access to hundreds of verified performing artists across multiple categories",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Streamlined booking process with instant availability checks",
  },
  {
    icon: Star,
    title: "Quality Assured",
    description: "All artists are vetted and rated by previous clients",
  },
  {
    icon: MessageSquare,
    title: "24/7 Support",
    description: "Dedicated support team to help with your booking needs",
  },
]

export function ArtistsSections() {
  return (
    <>
      {/* Artist Categories */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Discover Talented Artists</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Browse through our diverse categories of performing artists and find the perfect match for your event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-200 mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-slate-100 mb-3">{category.description}</p>
                    <p className="text-sm font-medium text-primary">{category.count}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" asChild size="lg">
              <Link href="/artists">View All Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20  dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Why Choose Artistly?</h2>
            <p className="text-xl text-gray-700 dark:text-slate-200 max-w-3xl mx-auto">
              We make it easy to find, book, and manage performing artists for any event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.title} className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-105 transform transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary dark:text-gray-800" />
                  </div>
                  <h3 className="text-xl font-semibold dark:text-slate-100 mb-2">{feature.title}</h3>
                  <p className="dark:text-slate-200">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}