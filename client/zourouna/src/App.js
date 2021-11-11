
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import  Villages  from './Components/Villages/Villages';
import {About} from './Components/About/About';
import {Contact} from './Components/Contact/Contact';
import {SignIn} from './Components/SignIn/SignIn';
import HomePage from './HomePage';
import {withRouter} from 'react-router';
import Header from './Components/header/Header';
function App() {
  return (
    <Router>
       <div className="App">
      <HomePage/>
      <Routes>
        <Route exact path="/" component={withRouter(Header)}/>
<Route path="/villages" component={withRouter(Villages)}/> 
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>
<Route path="/signin" component={SignIn}/> 
   </Routes> 
    </div>
    </Router>
   
  );
}

export default App;
