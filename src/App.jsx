import { lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Preloader from "./Components/Preloader";


import Footer from "./Components/Footer";

const Home = lazy(() => import("./Pages/Home"));
const ProjectDetail = lazy(() => import("./Sections/projectDetails"));
import ScrollParallaxVideo from "./Components/ParallaxBackground";
import SmoothScroll from "./Components/SmoothScroll";
import CustomCursor from "./Components/CustomCursor";
import RGBScrollbar from "./Components/RgbScroll";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <SmoothScroll isLoading={loading}>


       <div className="relative text-base-content bg-transparent">
        {!loading && <CustomCursor />}
        {!loading && <RGBScrollbar></RGBScrollbar>}
      {/* Preloader */}
      <Preloader isLoading={loading} />

      {!loading && (
        <>
       
          {/* Background */}
          <div className="fixed inset-0 -z-50 pointer-events-none">
            <ScrollParallaxVideo></ScrollParallaxVideo>
          </div>
          

          {/* Main content */}
          <div className="relative z-10 will-change-transform">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
            </Routes>

            <Footer />
          </div>
        </>
      )}
    </div>
    </SmoothScroll>
   
  );
}

export default App;
