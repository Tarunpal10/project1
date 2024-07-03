import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen]=useState(false)
  return (
 <>
<nav>
<h1>CALCULATOR.INC</h1>
      <div className="menu" onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
      <span></span>
      <span></span>
      <span></span>
      
     </div>
  <ul className={menuOpen ? "open" : ""}>
    <li> <NavLink to='/'>Calculator</NavLink></li>
    <li> <NavLink to='/age'>AgeCalculator</NavLink></li>
    <li> <NavLink to='/bmi'>BmiCalculator</NavLink></li>
    <li> <NavLink to='/instru'>EMICalculator</NavLink></li>

  </ul>
</nav>

 </>
  )
}

export default Navbar
