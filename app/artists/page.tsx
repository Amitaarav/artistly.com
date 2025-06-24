import { ArtistListing } from "@/components/ArtistListing"
import { Navbar } from "@/components/HomepageComponents/headersection/Navbar"
export default function artistsPage() {
    return (
        <div>
            <Navbar/>
            <ArtistListing/>
        </div>
    )
}