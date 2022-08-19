import React from 'react';
import './assets/css/style.css';
import Navbar from './components/Nav'
import Movies from './components/Movies';

const bodyStyle={
 height:'100vh',
}

function App() {
  return (
    <div className={bodyStyle}>
        <Navbar />
        <Movies />
    </div>
  );
}

export default App;
