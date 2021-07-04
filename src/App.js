import React from 'react';
import './App.css';
import './sass/main.scss'
import Header from './components/header';
import HomeSection from './components/home-section'
import AboutSection from './components/about-section'
import ProjectsSection from './components/projects-section'
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  Aos.init();
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </div>

  );
}

export default App;
