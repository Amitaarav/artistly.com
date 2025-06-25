"use client"
import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Filter, Grid, List, IndianRupeeIcon } from "lucide-react"
import Image from "next/image"
import { dummyArtists } from "@/lib/dummyData"
import { useArtistContext } from "@/context/ArtistContext"
import { useDebounce } from "@/hooks/useDebounce"

type ViewMode = "grid" | "list"

export function ArtistListing() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")

  const { artists, filters, setFilters } = useArtistContext();
  const {searchTerm, selectedCategory, selectedLocation, selectedPriceRange} = filters;
  const debounceSearchTerm = useDebounce(searchTerm, 500)
  const filteredArtists = useMemo(() => {
    return artists.filter((artist) => {
      const matchesSearch =
        artist.name.toLowerCase().includes(debounceSearchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(debounceSearchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "all" || artist.category.includes(selectedCategory)
      const matchesLocation = selectedLocation === "all" || artist.location === selectedLocation
      const matchesPriceRange = selectedPriceRange === "all" || artist.priceRange === selectedPriceRange

      return matchesSearch && matchesCategory && matchesLocation && matchesPriceRange
    })
  }, [artists,debounceSearchTerm, selectedCategory, selectedLocation, selectedPriceRange])

  const categories = [...new Set(artists.flatMap((artist) => artist.category))]
  const locations = [...new Set(artists.map((artist) => artist.location))]
  const priceRanges = [...new Set(artists.map((artist) => artist.priceRange))]

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      selectedCategory: "all",
      selectedLocation: "all",
      selectedPriceRange: "all",
    })
  }
  return (
    <div className=" min-h-screen bg-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Browse Artists</h1>
          <p className="text-lg text-gray-300">Discover talented performing artists for your next event</p>
        </div>

        {/* Filters */}
        <div className="bg-slate-100 dark:bg-slate-600 rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
                </h2>
                <div className="flex items-center space-x-2">
                <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                >
                    <Grid className="h-4 w-4" />
                </Button>
                <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                >
                    <List className="h-4 w-4" />
                </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Search */}
                <div>
                <Label htmlFor="search" className="text-gray-800 dark:text-gray-200">Search</Label>
                <Input
                    id="search"
                    placeholder="Search artists..."
                    value={searchTerm}
                    onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                    className="bg-white dark:bg-gray-700 dark:text-white"
                />
                </div>

                {/* Category Filter */}
                <div>
                <Label htmlFor="category" className="text-gray-800 dark:text-gray-200">Category</Label>
                <Select value={selectedCategory} onValueChange={(val) => setFilters({ ...filters, selectedCategory: val })}>
                    <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                    <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:text-white">
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                        {category}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>

                {/* Location Filter */}
                <div>
                <Label htmlFor="location" className="text-gray-800 dark:text-gray-200">Location</Label>
                <Select value={selectedLocation} onValueChange={(val) => setFilters((prev) => ({ ...prev, selectedLocation: val }))}>
                    <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                    <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:text-white">
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                        {location}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>

                {/* Price Range Filter */}
                <div>
                <Label htmlFor="price" className="text-gray-800 dark:text-gray-200">Price Range</Label>
                <Select value={selectedPriceRange} onValueChange={(val) => setFilters((prev) => ({ ...prev, selectedPriceRange: val }))}>
                    <SelectTrigger className="dark:bg-gray-700 dark:text-white">
                    <SelectValue placeholder="All Prices" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:text-white">
                    <SelectItem value="all">All Prices</SelectItem>
                    {priceRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                        {range}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                <Button onClick={clearFilters} className="w-full">
                    Clear Filters
                </Button>
                </div>
            </div>
            </div>


        {/* Results Count */}
        <div className="mb-6 px-2">
          <p className="text-gray-200">
            Showing {filteredArtists.length} of {dummyArtists.length} artists
          </p>
        </div>

        {/* Artist Grid/List */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className=" bg-slate-100 hover:shadow-lg transition-shadow dark:bg-slate-900">
              <CardContent className={viewMode === "grid" ? "p-6" : "p-6 flex items-center space-x-6"}>
                <div className={viewMode === "grid" ? "" : "flex-shrink-0"}>
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={viewMode === "grid" ?  600 : 120}
                    height={viewMode === "grid" ? 400 : 120}
                    className={`rounded-lg object-cover  ${viewMode === "grid" ? "w-full h-48 mb-4" : "w-30 h-30"}`}
                  />
                </div>

                <div className={viewMode === "grid" ? "" : "flex-1"}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100">{artist.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1 dark:text-gray-50">{artist.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {artist.category.map((cat) => (
                      <Badge key={cat} >
                        {cat}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-slate-200 mb-3 line-clamp-2">{artist.bio}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1 dark:text-slate-100" />
                      <span className="text-sm dark:text-slate-300">{artist.location}</span>
                    </div>
                    <div className="flex items-center text-gray-900 font-semibold">
                      <IndianRupeeIcon className="h-4 w-4 mt-1 dark:text-slate-200" />
                      <span className="dark:text-slate-200">{artist.priceRange}</span>
                    </div>
                  </div>

                  <Button className="w-full">Ask for Quote</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No artists found matching your criteria.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
