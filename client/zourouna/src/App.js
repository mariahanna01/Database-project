
import {React,useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  Villages from './Components/Villages/Villages';
import {About} from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SignIn'; 

import {Plan} from './Components/Plan/Plan';
import Axios  from 'axios';
import Header from './Components/header/Header';
import Favorite from './Components/Favorite/Favorite';
import TopBar from './Components/topbar/TopBar';
import SignUp from './Components/SignUp/SignUp';
import TourGuideView from './Components/TourGuideView/TourGuideView';
import TourGuideViewSignIn from './Components/TourGuideView/TourGuideViewSignIn';
import AddPlan from './Components/TourGuideView/AddPlan/AddPlan';
import Plan1Batroun from './Components/PlansForVillages/Village1/Plan1Batroun';
function App() {
  const [firstName,setFirstName]= useState('')
  const[signIn,setSignIn]= useState('')
  const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

useEffect(()=>{
  console.log('hello')
})



  return (
    <Router>
       <div className="App">
      {localStorage.getItem('name')!='null' ? <TopBar signIn={localStorage.getItem('loggedIn')} name={localStorage.getItem('name')}/> : <TopBar  name={localStorage.getItem('name')}/>}
      
      <Routes>
        <Route exact path="/" element={<Header/>}/>
<Route path="/villages" element={<Villages/>} />
<Route path="/about"  element={<About/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="/signin" 
 element={<SignIn/>} /> 
<Route path="/village1" element={<Plan/>}/>
<Route path="/plan1" element={<SignIn />}/>
<Route path="/plan1Batroun" element={<Plan1Batroun/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path='/tourguide' element={<TourGuideViewSignIn/>}/>
<Route path='tourguideView' element={<TourGuideView/>}/>
<Route path= '/addPlan' element={<AddPlan/>}/>
<Route path= '/MYFAVORITE' element={<Favorite/>}/>

   </Routes> 
    </div>
    </Router>
   
  );
}

export default App;
