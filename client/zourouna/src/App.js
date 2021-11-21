
import {React,useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  Villages  from './Components/Villages/Villages';
import {About} from './Components/About/About';
import {Contact} from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SignIn';
import {Plan} from './Components/Plan/Plan';

import Header from './Components/header/Header';
import TopBar from './Components/topbar/TopBar';
import SignUp from './Components/SignUp/SignUp';
function App() {
  const [firstName,setFirstName]= useState('Chloe')
  const[signIn,setSignIn]= useState('true')
  return (
    <Router>
       <div className="App">
      <TopBar firstName={firstName} signIn={signIn}/>
      <Routes>
        <Route exact path="/" element={<Header/>}/>
<Route path="/villages" element={<Villages/>}/>
<Route path="/about"  element={<About/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="/signin"  element={<SignIn/>}/> 
<Route path="/village1" element={<Plan/>}/>
<Route path="/plan1" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/>
   </Routes> 
    </div>
    </Router>
   
  );
}

export default App;
