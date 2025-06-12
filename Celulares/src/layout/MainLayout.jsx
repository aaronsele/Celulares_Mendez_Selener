import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {

  return (
<>
<Navbar />

<Footer />

<Outlet />
</>
  )
}

export default MainLayout
