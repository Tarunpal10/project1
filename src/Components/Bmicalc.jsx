import React, { useState } from 'react'
import '../Style/Bmi.css'

const Bmicalc = () => {
  const [weight , setWeight]= useState(0)
  const [height , setHeight]= useState(0)
  const [bmi, setBmi]=useState('')
  const [message, setMessage] = useState('')

  const reload=()=>{
      window.location.reload()
  }
  const calcBmi = (e)=>{
    e.preventDefault();
    // event.preventDefault();
    if(weight===0 || height===0){
      alert("please enter the height and weight")
    }else{
      let bmi= (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
      if(bmi<18){
        setMessage('You are underweight')
      }
        else if(bmi>=18 && bmi<30){
        setMessage('You are healthyweight person ')
      }
      else{
        setMessage('you are overweight')
      }
    }

  }

  return (
    <div className='bmicalc'>
      <h1>Calculate Your BMI(body mass index)</h1>
      <form >
      
        <div>
          <label>Weight in (lbs):</label> <br />
          <input type="text"  value={weight} placeholder='Enter Weight' onChange={(e)=>setWeight(e.target.value)} />
        </div>
        <div>
          <label>Height in (inches):</label>
          <br />
          <input type="text" value={height} placeholder='Enter Height' onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div>
          <button type="submit" className='btn' onClick={calcBmi} >Submit</button>
          <button type="submit" className='btn' onClick={reload}>Reload</button>
        </div>
        <hr />
    <div className='outputed'>
      <h3>Your BMI is:{bmi}</h3>
      <p>{message}</p>
    </div>
      </form>
    </div>
  )
}

export default Bmicalc
