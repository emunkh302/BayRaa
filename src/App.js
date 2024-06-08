import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import media from "./assets/img/welcome.mp4";

function App() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showVideo && (
        <div className="videoContainer">
          <video src={media} autoPlay muted />
        </div>
      )}
      {!showVideo && (
        <div>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
