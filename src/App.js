import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import { useSmothScroll } from "./Hooks/useSmothScroll";

function App() {
  useSmothScroll()
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
