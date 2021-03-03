import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Main from './component/Header/Main/Main';

import Marquee from './component/Header/Marquee/Marquee';

function App() {
 
  return (
    <div>
      <Header></Header>
      <div className="marquee">
        <Marquee></Marquee>
      </div>
      
      <Main></Main>
         </div>
  );
}

export default App;
