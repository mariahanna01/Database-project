
import {React,useState,useEffect} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  Villages from './Components/Villages/Villages';
import {About} from './Components/About/About';
import Contact from './Components/Contact/Contact';
import SignIn from './Components/SignIn/SignIn'; 

import Plan from './Components/Plan/Plan';
import Axios  from 'axios';
import Header from './Components/header/Header';
import TopBar from './Components/topbar/TopBar';
import SignUp from './Components/SignUp/SignUp';
import TourGuideView from './Components/TourGuideView/TourGuideView';
import TourGuideViewSignIn from './Components/TourGuideView/TourGuideViewSignIn';
import AddPlan from './Components/TourGuideView/AddPlan/AddPlan';
import Plan1Batroun from './Components/PlansForVillages/Village1/Plan1Batroun';
import PlansVillage1 from './Components/Plans/PlansVillage1';
import PlansVillage2 from './Components/Plans/PlansVillage2';
import PlansVillage3 from './Components/Plans/PlansVillage3';
import PlansVillage4 from './Components/Plans/PlansVillage4';
import PlansVillage5 from './Components/Plans/PlansVillage5';
import PlansVillage6 from './Components/Plans/PlansVillage6';
import EditPlan from './Components/TourGuideView/EditPlan/EditPlan';
import Booked from './Components/TourGuideView/BookedPlans/Booked';
import Rewards from './Components/Rewards/Rewards';
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
      {localStorage.getItem('name')!='null' ? <TopBar signIn={localStorage.getItem('loggedIn')} name={localStorage.getItem('name')} user={localStorage.getItem('user')}/> : <TopBar  name={localStorage.getItem('name')} user={localStorage.getItem('user')}/>}
      
      <Routes>  
        <Route exact path="/" element={<Header/>}/>
<Route path="/villages" element={<Villages/>} />
<Route path="/about"  element={<About/>}/>
<Route path="/contact"  element={<Contact/>}/>
<Route path="/contact1"  element={<Contact/>}/>
<Route path="/signin" 
 element={<SignIn/>} /> 
<Route path="/village1" element={<PlansVillage1/>}/>
<Route path="/village2" element={<PlansVillage2/>}/>
<Route path="/village3" element={<PlansVillage3/>}/>
<Route path="/village4" element={<PlansVillage4/>}/>
<Route path="/village5" element={<PlansVillage5/>}/>
<Route path="/village6" element={<PlansVillage6/>}/>
<Route path="/plan1" element={<SignIn />}/>
<Route path="/plan1Batroun" element={<Plan1Batroun/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path='/tourguide' element={<TourGuideViewSignIn/>}/>
<Route path='tourguideView' element={<TourGuideView/>}/>
<Route path= '/addPlan' element={<AddPlan/>}/>
<Route path='tourguideView/editplan' element={<EditPlan/>}/>
<Route path='/booked' element={<Booked/>}/>
<Route path='/rewards' element={<Rewards/>}/>
   </Routes> 
    </div>
    </Router>
   
  );
}

export default App;
