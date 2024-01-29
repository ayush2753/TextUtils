
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type  
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'darkslategray';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    
  }

  return(
  <>
    {/* <Navbar title="TextUtils"  /> */}
    {/* <Navbar/> */}
    <BrowserRouter>
    <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />  
    <Alert alert={alert}/>
    <div className="container my-3" >
    
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/home" element={<Textform heading="Enter the text to analyse: " mode={mode}/>} />
          <Route exact path="/" element= {<Textform heading="Enter the text to analyse: " mode={mode}/>} /> 
      </Routes>
    
    
    </div>
    </BrowserRouter>
    
  </>
  );
}

export default App;

