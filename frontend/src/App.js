import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroSection } from "./pages/HeroSection";
import { SearchPanel } from "./pages/SearchPanel";
import { AboutUs } from "./pages/AboutUs";
import Dash from "./pages/Dash";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />}> </Route>
          <Route path="/search" element={<SearchPanel />}> </Route>
          <Route path="/aboutus" element={<AboutUs />}> </Route>
          <Route path="/dash" element={<Dash />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
