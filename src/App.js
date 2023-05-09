import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import  Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },2000);
  }
  const handleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor="gray";
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtils- Dark Mode';
      // setInterval(() => {
      //   document.title='TextUtils is Amazing mode!';

      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils now!'
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title='TextUtils- Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} handleMode={handleMode} />
      <Alert alert={alert} />
      <TextForm  heading="Enter your text here" showAlert={showAlert} />
      {/* <Routes>
          <Route path="/textform" element={<TextForm  heading="Enter your text here" showAlert={showAlert} />}>
          </Route>
          <Route path="/about"  element={<About />}>
            
          </Route>
        </Routes>
        </Router> */}
      
    </>
  );
}

export default App;
