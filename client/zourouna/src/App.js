
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  Villages  from './Components/Villages/Villages';
import {About} from './Components/About/About';
import {Contact} from './Components/Contact/Contact';
import {SignIn} from './Components/SignIn/SignIn';
import HomePage from './HomePage';
import {withRouter} from 'react-router';
import Header from './Components/header/Header';
import TopBar from './Components/topbar/TopBar';
function App() {
  return (
    <Router>
       <div className="App">
      <TopBar/>
      <Routes>
        <Route exact path="/" element={<Header/>}/>
<Route path="/villages" element={<Villages/>}/>
<Route path="/about"  element={<About/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="/signin"  element={<SignIn/>}/> 
   </Routes> 
    </div>
    </Router>
   
  );
}

export default App;
