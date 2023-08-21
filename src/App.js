
import './App.css';

import React from 'react';
import {Footer, Blog, Possibility, Features, Header, WhatInnovAI} from './containers';
import {Cta, Brand, Navbar} from './components';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient'>
      <Navbar/>
      <Header/>
        </div>
      <Brand/>
      <WhatInnovAI/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

