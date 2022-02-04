import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolios from "./components/portfolios/Portfolios";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
   < div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu/>
     <div className="sections">
    <Intro/>
    <Portfolios/>
    <Testimonials/>
    <Works/>
    <Contact/>
     </div>
     </div>
  )
}
export default App;
