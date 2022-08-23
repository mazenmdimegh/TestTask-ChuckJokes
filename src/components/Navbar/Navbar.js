import user from '../../assets/assets_Homework_Front-End_01/shape.png';
import path from '../../assets/assets_Homework_Front-End_02/path.png';
import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [Menu, setMenu] = useState(false);
    const [Toggle, setToggle] = useState(false);
    return (
        <div className="nav-wrapper">
            <div className="nav-wrap">
                <a className="nav-item">so funktionierts</a>
                <a className="nav-item">sonderangebote</a>
                <div className="dropdown" onClick={() => setToggle(!Toggle)}>
                    <span><img className='user' src={user} /></span> mein bereich <span><img className='path' src={path} /></span>
                    {Toggle && (
                        <div className='dropdown-content'>
                            <div className='dropdown-item'>My published jokes <span><img className='path' src={path} /></span></div>
                            <hr />
                            <div className='dropdown-item'>My saved jokes</div>
                            <hr />
                            <div className='dropdown-item'>Account information</div>
                            <hr />
                            <div className='dropdown-item'>Publish new joke</div>
                        </div>
                    )}
                </div>

            </div>
            <div className='nav-wrap-Mobile'>
                <AiOutlineMenu onClick={()=>setMenu(true)}/>
            </div>
        </div>
    );
}
export default Navbar;