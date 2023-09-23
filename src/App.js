import "./app.scss"
import Topbar from "./components/topBar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/work/Work";
import Testimoniols from "./components/testimoniols/Testimoniols";
import Contact from "./components/contact/Contact";
import {useState} from "react";
import Menu from "./menu/Menu";
import Footer from "./components/footer/Footer";


function App() {

  const [menuOpen, setmenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimoniols/>
        <Contact/>
        <Footer/>
      </div>

  
    </div>
  );
}

export default App;
