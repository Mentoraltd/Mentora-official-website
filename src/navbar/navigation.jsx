import "./navigation.css";
import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineArrowForward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

               const scrollTop = () => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        setMobileDropdown(null); // Close dropdowns when nav toggles
    };

    const handleMobileDropdownToggle = (item) => {
        setMobileDropdown((prev) => (prev === item ? null : item));
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    useEffect(() => {
        const nav = document.getElementById('mainNav');

        const handleScroll = () => {
            if (window.scrollY > 0) {
                nav?.classList.add('nav-Scrolled');
            } else {
                nav?.classList.remove('nav-Scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHover = (item) => setHoveredItem(item);
    const handleLeave = () => setHoveredItem(null);

    return (
        <>
            <section className='navContainer' id="mainNav">
                <div className="companyLogo" id='MentoraHomeLogo'>
                    <Link to="/" onClick={scrollTop}><span className="logo">mentora</span></Link>
                </div>

                <div className="navListContainer">
                    <ul className="uList">
                        <li className="navlist" onMouseEnter={() => handleHover('product')} onMouseLeave={handleLeave}>
                            <div className="list">
                                <span>Product</span> <IoIosArrowDown />
                            </div>
                            {hoveredItem === 'product' && (
                                <div className="dropDown">
                                    <div className="leftDropDown">
                                        <ul>
                                            <Link to="/error"><li className="dropDownList">Features</li></Link>
                                            <Link to="/download" onClick={scrollTop}><li className="dropDownList">Download</li></Link>
                                            <Link to="/learn"><li className="dropDownList">Learn / Demo</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="navlist" onMouseEnter={() => handleHover('education')} onMouseLeave={handleLeave}>
                            <div className="list">
                                <span>Education</span> <IoIosArrowDown />
                            </div>
                            {hoveredItem === 'education' && (
                                <div className="dropDown">
                                    <div className="leftDropDown">
                                        <ul>
                                            <Link to="/students" onClick={scrollTop}><li className="dropDownList">Students</li></Link>
                                            <Link to="/institution" onClick={scrollTop}><li className="dropDownList">Institutions</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="navlist" onMouseEnter={() => handleHover('resource')} onMouseLeave={handleLeave}>
                            <div className="list">
                                <span>Resource</span> <IoIosArrowDown />
                            </div>
                            {hoveredItem === 'resource' && (
                                <div className="dropDown">
                                    <div className="leftDropDown">
                                        <ul>
                                            <Link to="/blog" onClick={scrollTop}><li className="dropDownList">Blog</li></Link>
                                            <Link to="/events"><li className="dropDownList">Events</li></Link>
                                            <Link to="/helpcenter"> onClick={scrollTop}<li className="dropDownList">Help Center</li></Link>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>

                        <Link to="/pricing" onClick={scrollTop}><li className="navlist"><span>Pricing</span></li></Link>
                    </ul>

                    <div className="navCTAbutton">
                        <li><a href="mailto:mentoraltd@gmail.com">Contact Sales</a> </li>
                        <div className="CtaButton">
                            <span className="PrimaryButtonWhiteText24">
                                Download Mentora App <MdOutlineArrowForward />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="openNav" onClick={toggleNavbar}>
                    <RxHamburgerMenu className="hamburgerOpen" />
                </div>
            </section>

            <section className={`mobileNav ${isOpen ? 'open' : 'close'}`}>
                <div className="navListContainer">
                    <ul>
                        <li className="navlist" onClick={() => handleMobileDropdownToggle('product')}>
                            <div className="list">
                                <span>Product</span> <IoIosArrowDown />
                            </div> 
                            {mobileDropdown === 'product' && (
                                <ul className="mobileDropdown">
                                    <Link to="/error"><li className="dropDownList">Features</li></Link>
                                    <Link to="/download" onClick={scrollTop}><li className="dropDownList">Download</li></Link>
                                    <Link to="/learn"><li className="dropDownList">Learn / Demo</li></Link>
                                </ul>
                            )}
                        </li>
                        <li className="navlist" onClick={() => handleMobileDropdownToggle('education')}>
                            <div className="list">
                                <span>Education</span> <IoIosArrowDown />
                            </div>
                            {mobileDropdown === 'education' && (
                                <ul className="mobileDropdown">
                                    <Link to="/students" onClick={scrollTop}><li className="dropDownList">Students</li></Link>
                                    <Link to="/institution" onClick={scrollTop}><li className="dropDownList">Institutions</li></Link>
                                </ul>
                            )}
                        </li>
                        <li className="navlist" onClick={() => handleMobileDropdownToggle('resource')}>
                            <div className="list">
                                <span>Resource</span> <IoIosArrowDown />
                            </div>
                            {mobileDropdown === 'resource' && (
                                <ul className="mobileDropdown">
                                    <Link to="/blog" onClick={scrollTop}><li className="dropDownList">Blog</li></Link>
                                    <Link to="/events"><li className="dropDownList">Events</li></Link>
                                    <Link to="/helpcenter" onClick={scrollTop}><li className="dropDownList">Help Center</li></Link>
                                </ul>
                            )}
                        </li>
                        <Link to="/pricing" onClick={scrollTop}><li className="navlist"><span>Pricing</span></li></Link>
                    </ul>

                    <div className="navCTAbutton">
                        <li><a href="mailto:mentoraltd@gmail.com">Contact Sales</a></li>
                        <div className="CtaButton">
                            <span className="PrimaryButtonWhiteText24">
                                Download Mentora App <MdOutlineArrowForward />
                            </span>
                        </div>
                    </div>

                    <div className="closeNav" onClick={toggleNavbar}>
                        <IoCloseSharp className="hamburgerOpen" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navigation;
