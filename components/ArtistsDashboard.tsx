"use client"

import type React from "react"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Upload, User, Tag, Camera } from "lucide-react"
import { Toaster } from "@/components/ui/sonner"
import { useArtistContext } from "@/context/ArtistContext"
import Image from "next/image"
import { v4 as uuidv4 } from "uuid"
import type { StaticImageData } from "next/image";


const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(50, "Bio must be at least 50 characters"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
  priceRange: z.string().min(1, "Please select a price range"),
  location: z.string().min(2, "Location is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
})

type FormData = z.infer<typeof formSchema>

const categories = ["Singer", "Dancer", "Musician", "DJ", "Speaker", "Comedian", "Magician", "Band"]

const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Marathi",
  "Bengali",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
]

const priceRanges = [
  "₹41,500 - ₹83,000",
  "₹83,000 - ₹2,07,500",
  "₹2,07,500 - ₹4,15,000",
  "₹4,15,000 - ₹8,30,000",
  "₹8,30,000+"
]

export function ArtistOnboardingForm() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      priceRange: "",
      location: "",
      email: "",
      phone: "",
    },
  })

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const { addArtist } = useArtistContext()
  const onSubmit = async (data: FormData) => {
    try {
        const newArtist = {
        id: uuidv4(),
        name: data.name,
        bio: data.bio,
        category: data.categories,
        languages: data.languages,
        priceRange: data.priceRange,
        location: data.location,
        email: data.email,
        phone: data.phone,
        rating: 0,
        image: selectedImage as unknown as StaticImageData, 
        };

      addArtist(newArtist);

      console.log("Form submitted:", { ...data, profileImage: selectedImage })
      Toaster({
        title: "Application Submitted!",
        description: "Your artist profile has been submitted for review. We'll contact you within 24-48 hours.",
      })
      form.reset()
      setSelectedImage(null)
      setImagePreview(null)
    } catch (error) {
      console.error("Error submitting form:", error)
      Toaster({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <section className="min-h-screen bg-gray-800 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 pt-4 space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mt-4">Join Artistly as a Performer</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Create your artist profile and start receiving booking requests from event planners
          </p>
        </div>

        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-slate-200 rounded-lg p-6">
            {/* Personal Information */}
            <Card >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Personal Information
                </CardTitle>
                <CardDescription>Tell us about yourself and your artistic background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location *</FormLabel>
                        <FormControl>
                          <Input placeholder="City, State" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Artist Bio *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your artistic journey, experience, and what makes you unique..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Minimum 50 characters. This will be displayed on your profile.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="h-5 w-5 mr-2" />
                  Professional Details
                </CardTitle>
                <CardDescription>Specify your artistic categories and skills</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="categories"
                  render={() => (
                    <FormItem>
                      <FormLabel>Performance Categories *</FormLabel>
                      <FormDescription>Select all categories that apply to your performances</FormDescription>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category) => (
                          <FormField
                            key={category}
                            control={form.control}
                            name="categories"
                            render={({ field }) => {
                              return (
                                <FormItem key={category} className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(category)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, category])
                                          : field.onChange(field.value?.filter((value) => value !== category))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">{category}</FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
        {/* Language */}
                <FormField
                  control={form.control}
                  name="languages"
                  render={() => (
                    <FormItem>
                      <FormLabel>Languages Spoken *</FormLabel>
                      <FormDescription>Select all languages you can perform in</FormDescription>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {languages.map((language) => (
                          <FormField
                            key={language}
                            control={form.control}
                            name="languages"
                            render={({ field }) => {
                              return (
                                <FormItem key={language} className="flex flex-row items-start space-x-3 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(language)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, language])
                                          : field.onChange(field.value?.filter((value) => value !== language))
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">{language}</FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            {/* Fee Range */}
                <FormField
                  control={form.control}
                  name="priceRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fee Range *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your typical fee range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {priceRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription>This helps event planners find artists within their budget</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Profile Image */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-5 w-5 mr-2" />
                  Profile Image
                </CardTitle>
                <CardDescription>Upload a professional photo that represents you as an artist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  {imagePreview ? (
                    <div className="relative">
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Profile preview"
                        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="absolute -bottom-2 -right-2"
                        onClick={() => {
                          setImagePreview(null)
                          setSelectedImage(null)
                        }}
                      >
                        Change
                      </Button>
                    </div>
                  ) : (
                    <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-gray-400" />
                    </div>
                  )}

                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="profile-image"
                    />
                    <Label htmlFor="profile-image" className="cursor-pointer">
                      <Button type="button" asChild className="bg-blue-800">
                        <span>Upload Profile Image</span>
                      </Button>
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="px-12">
                Submit Application
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  )
}
