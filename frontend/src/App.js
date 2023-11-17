import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className='app'>
      {/*Navbar*/}
      <Navbar />

      {/*Sidebar*/}
      <Sidebar />
      
      {/*feed*/}
      <Feed />

      {/*widget*/}
    </div>
  )
}

export default App