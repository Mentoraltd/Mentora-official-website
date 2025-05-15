import "./navigation.css";
import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineArrowForward } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

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
                    <span className="logo">mentora</span>
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
                                            <li className="dropDownList">Features</li>
                                            <li className="dropDownList">Download</li>
                                            <li className="dropDownList">Learn / Demo</li>
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
                                            <li className="dropDownList">Students</li>
                                            <li className="dropDownList">Institutions</li>
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
                                            <li className="dropDownList">Blog</li>
                                            <li className="dropDownList">Events</li>
                                            <li className="dropDownList">Help Center</li>
                                            <li className="dropDownList">Upcoming Features</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="navlist"><span>Pricing</span></li>
                    </ul>

                    <div className="navCTAbutton">
                        <li>Contact Sales</li>
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
                                    <li className="dropDownList">Features</li>
                                    <li className="dropDownList">Download</li>
                                    <li className="dropDownList">Learn / Demo</li>
                                </ul>
                            )}
                        </li>
                        <li className="navlist" onClick={() => handleMobileDropdownToggle('education')}>
                            <div className="list">
                                <span>Education</span> <IoIosArrowDown />
                            </div>
                            {mobileDropdown === 'education' && (
                                <ul className="mobileDropdown">
                                    <li className="dropDownList">Students</li>
                                    <li className="dropDownList">Institutions</li>
                                </ul>
                            )}
                        </li>
                        <li className="navlist" onClick={() => handleMobileDropdownToggle('resource')}>
                            <div className="list">
                                <span>Resource</span> <IoIosArrowDown />
                            </div>
                            {mobileDropdown === 'resource' && (
                                <ul className="mobileDropdown">
                                    <li className="dropDownList">Blog</li>
                                    <li className="dropDownList">Events</li>
                                    <li className="dropDownList">Help Center</li>
                                    <li className="dropDownList">Upcoming Features</li>
                                </ul>
                            )}
                        </li>
                        <li className="navlist"><span>Pricing</span></li>
                    </ul>

                    <div className="navCTAbutton">
                        <li>Contact Sales</li>
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
