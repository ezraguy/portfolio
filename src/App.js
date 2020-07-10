import React from 'react';
import './App.css';
import Header from './components/header';
import Sec1 from './components/sec_1'
import Sec2 from './components/sec_2'
import Sec3 from './components/sec_3'
import Sec4 from './components/sec_4'
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {
  Aos.init();
  return (
    <div className="App">
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />

    </div>

  );
}

export default App;
