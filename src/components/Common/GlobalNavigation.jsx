import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";

export default function GlobalNavigation() {
    const location = useLocation();
    const navigate = useNavigate();

    // Show Navbar ONLY on root path
    if (location.pathname === "/") {
        return <Navbar />;
    }

    // Show Back Button on all other paths
    return (
        <button
            onClick={() => navigate(-1)}
            className="fixed top-5 left-5 sm:left-20 z-50 flex items-center text-white hover:text-[#b19eff] transition-colors"
        >
            <ArrowLeft className="w-6 h-6 mr-2" />
            <span className="hidden sm:inline font-semibold">Back</span>
        </button>
    );
}
