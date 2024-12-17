"use client"
import React, { useState } from "react";
import './globals.css';

export default function RootLayout({ children }) {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <html lang='en'>
            <body>
                <header>
                    <div id="login">
                        <img src="/Images/icons/login.png"></img>
                        <a href="./login">Login</a>
                    </div>
                    <nav>
                        <a href=".."><img src="../Images/logo.webp" /></a>
                        <ul>
                            <li><a href="../study">STUDY</a></li>
                            <li><a href="../learningResources">RESOURCES</a></li>
                            <li><a href="../information">INFORMATION</a></li>
                            <li><a href="../about">ABOUT</a></li>
                            <li id="morebtn" onClick={toggleMenu}><span>MORE</span></li>
                        </ul>
                        <img src="../Images/icons/menu.png" id='menubtn' onClick={toggleMenu}></img>
                    </nav>
                    <div id="menu" className={menuOpen ? "open" : " "}>
                        <div className="menuContent">
                            <a href="../study"><h3>STUDY</h3></a>
                            <ul>
                                <li><a href="../study/computerCourses">Computing Courses</a></li>
                                <li><a href="../study/designCourses">Design Courses</a></li>
                            </ul>
                        </div>
                        <div className="menuContent">
                            <a href="../learningResources"><h3>Learning Resources</h3></a>
                            <ul>
                                <li><a href="../learningResources/library">Library</a></li>
                                <li><a href="../learningResources/IT">IT</a></li>
                                <li><a href="../learningResources/Facilities">Facilities</a></li>
                            </ul>
                        </div>
                        <div className="menuContent">
                            <a href="../information"><h3>Information</h3></a>
                            <ul>
                                <li><a href="../information/student">Information For Students</a></li>
                                <li><a href="../information/staff">Information For Staff</a></li>
                            </ul>
                        </div>
                        <div className="menuContent">
                            <a href="../about"><h3>About Us</h3></a>
                            <ul>
                                <li><a href="../about/workWithUs">Work with us</a></li>
                            </ul>
                        </div>
                    </div>
                </header>

                <main>
                    {children}
                </main>

                <footer>
                    <div id="footerTop">
                        <img src="/Images/logo.webp"></img>
                        <div className="footerContent">
                            <h3>Cantor Colllege</h3>
                            <ul>
                                <li><a href="../study"><p>Study</p></a></li>
                                <li><a href="../learningResources"><p>Resources</p></a></li>
                                <li><a href="../information"><p>Information</p></a></li>
                                <li><a href="../about"><p>About</p></a></li>
                            </ul>
                        </div>
                        <div className="footerContent">
                            <h3>Contact</h3>
                            <ul>
                                <li><p>cantorhelp@cc.ac.uk</p></li>
                                <li><p>internationalEXP@cc.ac.uk</p></li>
                                <li><p>+44-(0)144 234 0235</p></li>
                                <li><p>+44-(0)744 234 0236</p></li>
                            </ul>
                        </div>
                        <div className="footerContent">
                            <h3>Adress</h3>
                            <ul>
                                <li><p>Cantor College</p></li>
                                <li><p>Main Street</p></li>
                                <li><p>Sheffield</p></li>
                                <li><p>SC4 2BB</p></li>
                            </ul>
                        </div>
                    </div>
                    <div id="footerBottom">
                        <p>Copright &copy; {new Date().getFullYear()} , ALL RIGHTS RESERVED to <b>Cantor College</b></p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
