import React, { useState } from "react";
import '../Style/emi.css'

const Instrucalc = () => {
  const [principle, setPrinciple]= useState('')
  const [interestRate, setInterestRate] = useState('')
  const [tenure, setTenure] = useState('')
  const [emi, setEmi] = useState(null)
  
  const calculateEmi =()=>{
    const p =parseFloat(principle)
    const r  = parseFloat(interestRate)/(12*100)
    const n= parseFloat(tenure)
    if(p>0 && r>0 && n>0){
            const emiValue = (p*r*Math.pow(1+r,n)-1)
            setEmi(emiValue.toFixed(2))
    } else{
      setEmi(null)
    }
  }

  return (
    <div className="timeline-landing">
      <div className="row-container">
        <h2>EMI Calculater</h2>
      </div>
      <div className="main">
      <div>
        <label className="Heading-text">Loan Amount</label> <br />
        <input type="text" placeholder="Enter your Loan Amount" value={principle} onChange={(e)=>setPrinciple(e.target.value)} />
      </div>
      <div>
        <label className="Heading-text">Interest Rate (in %)</label> <br />
        <input type="text" placeholder="Enter Interset Rate " value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
      </div>
      <div>
        <label className="Heading-text">Loan Tenure (in Months)</label> <br />
        <input type="text" placeholder="Enter Loan Tenure" value={tenure} onChange={(e)=>setTenure(e.target.value)} />
      </div>
      <button className="Emi-calc-btn" onClick={calculateEmi}>Calculate Emi</button>
      {
        emi!==null &&  <h1 className="outputes">
          EMI:{emi}
        </h1>
        
        }
        </div>
    </div>
  );
};

export default Instrucalc;
