import user from '../../assets/assets_Homework_Front-End_01/shape.png';
import path from '../../assets/assets_Homework_Front-End_02/path.png';
import React, { useEffect, useState } from "react";
import "./Navbar.scss";


const Navbar = () => {
    const [Toggle, setToggle] = useState(false);
    return (
        <div className="nav-wrapper">
            <a className="nav-item">so funktionierts</a>
            <a className="nav-item">sonderangebote</a>
            <div className="dropdown" onClick={() => setToggle(!Toggle)}>
                <span><img className='user' src={user} /></span> mein bereich <span><img className='path' src={path} /></span>
                {Toggle && (
                    <div className='dropdown-content'>
                        <div className='dropdown-item'>My published jokes <span><img className='path' src={path} /></span></div>
                        <hr/>
                        <div className='dropdown-item'>My saved jokes</div>
                        <hr/>
                        <div className='dropdown-item'>Account information</div>
                        <hr/>
                        <div className='dropdown-item'>Publish new joke</div>
                    </div>
                )}
            </div>

        </div>
    );
}
export default Navbar;