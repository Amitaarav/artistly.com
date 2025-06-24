"use client"
import { Users, Calendar, IndianRupeeIcon, TrendingUp, Eye, Edit, Trash2, Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button";
import { useArtistContext } from "@/context/ArtistContext"

export const ManagerDashboard = () => {

    const { artists, bookings} = useArtistContext() 
    const stats = [
    {
      title: "Total Artists",
      value: artists.length,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Bookings",
      value: bookings.filter((req) => req.status === "pending").length,
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Monthly Revenue",
      value: "₹10,00,000",
      icon: IndianRupeeIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Growth Rate",
      value: "+23%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }
    return (
    <div className="min-h-screen bg-gray-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Manager Dashboard</h1>
          <p className="text-lg text-gray-200">Manage your artists and track booking requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon
            return (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-slate-200">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-slate-50">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <IconComponent className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="artists" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 gap-2 hover:cursor-pointer">
            <TabsTrigger value="artists">My Artists</TabsTrigger>
            <TabsTrigger value="bookings">Booking Requests</TabsTrigger>
          </TabsList>

          {/* Artists Tab */}
          <TabsContent value="artists">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Artist Management</CardTitle>
                    <CardDescription>Manage your registered artists and their profiles</CardDescription>
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Artist
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Fee Range</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {artists.map((artist) => (
                        <TableRow key={artist.id}>
                          <TableCell className="font-medium">{artist.name}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {artist.category.slice(0, 2).map((cat) => (
                                <Badge key={cat} variant="secondary" className="text-xs">
                                  {cat}
                                </Badge>
                              ))}
                              {artist.category.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{artist.category.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>{artist.location}</TableCell>
                          <TableCell>{artist.priceRange}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <span className="text-sm font-medium">{artist.rating}</span>
                              <span className="text-xs text-gray-500 ml-1">★</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking Requests</CardTitle>
                <CardDescription>Review and manage incoming booking requests for your artists</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Event Planner</TableHead>
                        <TableHead>Artist</TableHead>
                        <TableHead>Event Date</TableHead>
                        <TableHead>Event Type</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.clientName}</TableCell>
                          <TableCell>{request.artistName}</TableCell>
                          <TableCell>{request.eventDate}</TableCell>
                          <TableCell>{request.eventType}</TableCell>
                          <TableCell>{request.budget}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {request.status === "pending" && (
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="bg-green-50 text-green-600 hover:bg-green-100"
                                >
                                  Accept
                                </Button>
                                <Button variant="outline" size="sm" className="bg-red-50 text-red-600 hover:bg-red-100">
                                  Decline
                                </Button>
                              </div>
                            )}
                            {request.status !== "pending" && (
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
