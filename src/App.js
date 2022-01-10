//import logo from './logo.svg';
import './App.css';
import Navebar from './components/Navebar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react';
import Popup from './components/Popup';
//import {
//  BrowserRouter as Router,
 // Switch,
 // Route,
  //Link
//}from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); //whether dark mode enable or not
  const [alert, setAlert] = useState("text is not updated");

  const showAlert = (action)=>{
       setAlert({
         act:action
       });
   }
  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='gray';
      document.title = 'gray mode enable';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.title = 'code jstar';
    }
  }
  return(
 <>
{/* <Router> */}      
<Navebar title="jstarCoder" home="Home" mode={mode} toggleMode={toggleMode}/>
<Popup Alert={alert}/>
<div className="container my-3">
  {/*<Switch>*/}
    {/*<Route exact path="/about">
    <About/>
    </Route>
  <Route exact path="/">*/}
    <TextForm showAlert={showAlert} heading="adding the text here"/>
   {/*</Route>*/}
  {/*</Switch>*/} 
</div>
{/*</Router>*/}

   </>
  );
}

export default App;
