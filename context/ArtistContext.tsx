"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { dummyArtists, dummyBookingRequests } from "@/lib/dummyData";

type Artist = typeof dummyArtists[0];
type Booking = typeof dummyBookingRequests[0];
type Filters  = {
    searchTerm: string;
    selectedCategory: string;
    selectedLocation: string;
    selectedPriceRange: string;
};

interface ArtistContextType {
  artists: Artist[];
  setArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
  bookings: Booking[];
  setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
  addArtist: (artist: Artist) => void;
  addBooking: (booking: Booking) => void

  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const ArtistProvider = ({ children }: { children: ReactNode }) => {
  const [artists, setArtists] = useState(dummyArtists.slice(0, 8));
  const [bookings, setBookings] = useState(dummyBookingRequests);

  const addArtist = (artist: Artist) => {
    setArtists([...artists, artist]);
  }

  const addBooking = (booking: Booking) =>{
    setBookings((prev)=>[...prev, booking])
  }

  const [filters, setFilters] = useState<Filters>({
      searchTerm: "",
      selectedCategory: "all",
      selectedLocation: "all",
      selectedPriceRange: "all",
  })
  
  return (
    <ArtistContext.Provider 
    value={{ 
        artists, 
        addArtist, 
        addBooking, 
        setArtists, 
        bookings,
        filters,
        setFilters, 
        setBookings }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtistContext = () => {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error("useArtistContext must be used within ArtistProvider");
  }
  return context;
};
