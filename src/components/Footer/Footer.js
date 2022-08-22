import arrow from '../../assets/assets_Homework_Front-End_01/path-copy-3.png';
import React, { useEffect, useState } from "react";
import "./Footer.scss";


const Footer = (Joke) => {
    
    return (
        <div className="footer-wrapper">
            <div className='footer-text'>
            <h3>Got Jokes? Get Paid</h3> 
            <h3>   for Submitting!
            </h3>
            <button>Submit joke <span><img className='arrow' src={arrow} /></span> </button>
            </div>        
        </div>
    );
}
export default Footer;