import { Routes, Route } from "react-router";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import ProjectDetail from "./Sections/projectDetails";

function App() {
  return (
    <div className="bg-base-100 text-base-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
