import React, { useState } from 'react';
import './App.css';
import './sass/main.scss';
import Header from './components/header';
import HomeSection from './components/home-section';
import AboutSection from './components/about-section';
import ProjectsSection from './components/projects-section';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Loader from './components/loader';

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
    Aos.init();
  }, 1600);
  return (
    <div className={loading ? 'App loading' : 'App'}>
      <Loader loading={loading} />
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
