import Home from './Components/home/Home';
import TopBar from './Components/topbar/TopBar';
import Header from './Components/header/Header'
import Sidebar from './Components/sidebar/Sidebar';
import React from 'react';

export default function HomePage(){
    return(
        <div>
            <TopBar/>
      <Home/>
     <Header/>

      <Sidebar/>
        </div>
    )
}