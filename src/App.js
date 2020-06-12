import React from 'react';
import './App.css';
import Header from './js/header';
import Sec1 from './js/sec_1'
import Sec2 from './js/sec_2'
import Sec3 from './js/sec_3'

import './js/animateHeader';
import Aos from 'aos';
import './js/hnb'

function App() {
  Aos.init();
  return (
    <div className="App">
      <Header />
      <Sec1 />
      <Sec2 />
      <Sec3 />


    </div>

  );
}

export default App;
