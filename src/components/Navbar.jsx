import React, {useState} from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
     <div className='Logo'>
     <img src='https://mymortgage.regionsmortgage.com/Content/Images/RegionsMortgageLogo.png' alt='Logo' />
     <button 
        className="btn" 
        onMouseEnter={() => setShowTooltip(true)} 
        onMouseLeave={() => setShowTooltip(false)}
      >
        Enroll Now
      </button>
    {showTooltip && (
      <div className='tooltip'>
        <div className='tooltip-content'>
          <h4>Enroll now to: </h4>
          <ul>
          <li>✔ Access your loans online</li>
          <li>✔ Pay your mortgage online</li>
          <li>✔ View your mortgage statements</li>

          </ul>

        </div>
        <div className='tooltip-arror'></div>

        </div>



    )}


    </div>
  )
};

export default Navbar;