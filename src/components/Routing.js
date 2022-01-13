import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'

export default function Routing() {
    return (
        <div>
            <Router>
                <nav>
                    {/*<div><a src="">Text</a></div>*/}
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/aboutus">About s</Link></div>
                    <div><Link to="/contactus">Contact Us</Link></div>
                </nav>
                <hr></hr>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="aboutus" element={<AboutUs />}/>
                    <Route path="contactus" element={<ContactUs />}/>
                </Routes>
            </Router>
        </div>

    )
}
