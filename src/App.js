import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as needed
import './App.css'; // Include your CSS for section styling
import SideBar from './components/SideBar';
import CatBort from './components/CatBort'
import ContactPage from './components/ContactPage.jsx'


function App() {
  return (
    <div className="flex  h-screen bg-[#161B1C]">
      <Navbar />
      <SideBar />
      <CatBort />
      <ContactPage />


    </div>
  );
}

export default App;
