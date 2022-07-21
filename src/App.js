import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      alertMessage : message,
      alertType : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-light')
  }

  const handleToggleMode = (cls) =>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls)
    switch (cls) {
      case 'primary':
        showAlert("Primary mode enabled", "primary");
        setMode('primary');
        console.log(mode);
        break;
      case 'warning':
        showAlert("Warning mode enabled", "warning");
        setMode('warning');
        break;
      case 'danger':
        showAlert("Danger mode enabled", "danger");
        setMode('danger');
        break;
      case 'success':
        showAlert("Success mode enabled", "success")
        setMode('success');
        break;
      default:
        showAlert("Light mode enabled", "light")
        setMode('light');
        break;
    }
    // if(mode === 'light'){
    //   setMode('dark')
    //   document.body.style.backgroundColor = '#151B54'
    //   showAlert("Dark mode enabled", "success")
    // }
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor = 'white'
    //   showAlert("Light mode enabled", "success")
    // }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={handleToggleMode} aboutText="About"/>
      <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>  
            <Route exact path="/" element={<TextForm heading="Enter to convert text" mode={mode} displayAlert={showAlert}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
