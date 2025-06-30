import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="grow">
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;