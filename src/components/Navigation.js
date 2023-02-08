import React from "react";
import logo from '../assets/images/logo.png';
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navigation(){
    return(
        <header>
            <div className="container">
                <div className="navigation-outer-wrapper">
                    <Link to = "/"> <img src={logo} className="site-logo" alt="logo" /> </Link>
                    <div className="navigation-wrapper">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/Membershippage">Membership</Link>
                                </li>
                                <li>
                                    <Link to="/Aboutpage">About</Link>
                                </li>
                                <li>
                                <Link to="/Searchhostpage">Search host</Link>
                                </li>
                                <li>
                                <Link to="/Aboutpage">Support</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="site-login-side">
                        <ul>
                            <li><Link to="/Loginpage" className="cta cta-yellow">  Log in</Link></li>    
                        </ul>    
                    </div> 
                    </div>              
                </div>
            </div>
        </header>
    )
}
export default Navigation;