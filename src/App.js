import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useSmothScroll } from "./Hooks/useSmothScroll";
import Footer from "./components/Footer";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";

function App() {
  useSmothScroll()
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/featured" element={<Featured/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog needFullHeight={true}/>}/>
        <Route path="*" element={<NotFound needFullHeight={true}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
