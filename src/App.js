import { useState } from "react";
import Agecalc from "./Components/Agecalc";
import Bmicalc from "./Components/Bmicalc";
import Calculator from "./Components/Calculator";
import Instrucalc from "./Components/Instrucalc";
import Navbar from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";


function App() {
  const [loading , SetLoading]=useState(true)
  const spinner= document.getElementById('spinner')
  if(spinner){
    setTimeout(()=>{
        spinner.style.display='none';
        SetLoading(false)
    },2000)
  }
  return (
    !loading && (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Calculator/>} />
      <Route path="age" element={<Agecalc/>} />
      <Route path="bmi" element={<Bmicalc/>} />
      <Route path="instru" element={<Instrucalc/>} />


    </Routes>
    </>
    )
  );
}

export default App;
