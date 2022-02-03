import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolios from "./components/portfolios/Portfolios";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";

function App() {
  return (
   < div className="app">
     <Topbar/>
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