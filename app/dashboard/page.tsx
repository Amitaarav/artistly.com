import { Navbar } from "@/components/HomepageComponents/headersection/Navbar";
import { ManagerDashboard } from "@/components/ManagerDashboard";
export default function dashboard() {
    return (
        <div>
            <Navbar/>
            <ManagerDashboard/>
        </div>
    );
}