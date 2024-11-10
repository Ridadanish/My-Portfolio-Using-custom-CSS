import React from 'react'
import { MdMenu } from "react-icons/md";
import '../app/styles/nevbar.css';
const Nevbar = () => {
  return (
    <div className="nevbar-container">
        <div className="nevbar">
            <div className="nevbar-brand">Rida Danish</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className="nevbar-link"><a href='#hero'>Home</a></li>
                <li className="nevbar-link"><a href='#about'>About</a></li>
                <li className="nevbar-link"><a href='#projects'>Projects</a></li>
                <li className="nevbar-link"><a href='#skillss'>Skills</a></li>
                <li className="nevbar-link"><a href='#contacts'>Contacts</a></li>
            </ul>
            <MdMenu className="nevbar-menu-icon" size={30} />

        </div>
      
    </div>
  )
}

export default Nevbar
