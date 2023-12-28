import React from "react";
import { NavLink } from "react-router-dom";




const Menu = () =>{
    return(
        <>
            <div className="menu">
                <nav>
                    <ul>
                        <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>About Us</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Gallery</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Rules & Regulations</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Registration</NavLink></li>
                        <li><NavLink to={''} className={'nav'}>Contact Us</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}


export default Menu
