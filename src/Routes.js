import React from "react";
import Info from "pages/Info";
import Mainpage from "pages/Mainpage";
import Home1 from "pages/Home1";
import Splash from "pages/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
