import { ArtistOnboardingForm } from "@/components/ArtistsDashboard"
import { Navbar } from "@/components/HomepageComponents/headersection/Navbar"
export default function onBoarding() {
    return (
        <div>
            <Navbar/>
            <ArtistOnboardingForm/>
        </div>
    )
}