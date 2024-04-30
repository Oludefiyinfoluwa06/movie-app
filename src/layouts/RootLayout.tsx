import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { SearchProps } from "../constants";

const RootLayout = ({ searchQuery, setSearchQuery }: SearchProps) => {
    return (
        <div>
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;