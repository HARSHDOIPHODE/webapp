import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolios from "./components/portfolios/Portfolios";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contactform from "./components/contact/Contactform";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen,setMenuOpen] = useState(true)
  return (
   < div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
    <Intro/>
    <Portfolios/>
    <Testimonials/>
    <Works/>
    <Contactform/>
   
     </div>
     </div>
  )
}
export default App;
