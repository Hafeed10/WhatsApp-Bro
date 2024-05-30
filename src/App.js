
import React from 'react';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import CatBort from './components/CatBort';
import ContactPage from './components/ContactPage';


const App = () => {
  return (
    <div className='flex justify-between'>
      <Navbar/>
      <SideBar/>
      <CatBort/>
      <ContactPage/>
     
    </div>
  );
}

export default App;
