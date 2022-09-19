import Topbar from './components/Topbar';
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import Blog from "./pages/Blog";
import { Route, Routes } from 'react-router-dom';
// import Slider from './components/slider/Slider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
