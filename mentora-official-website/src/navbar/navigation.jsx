import "./navigation.css";
//import {ArrowLeft} from 'react-icons'

const Navigation = () => {
    const nav = document.getElementById('mainNav');

    window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('nav-Scrolled');
    } else {
        nav.classList.remove('nav-Scrolled');
    }
    });

    return (
        <>
            <section className='navContainer' id="mainNav">
                <div className="companyLogo" id='MentoraHomeLogo'>
                    <span className="logo">mentora</span>
                    
                </div>

                <div className="navListContainer">
                    <ul>
                        <li className="navlist"><span>Product</span></li>
                        <li className="navlist"><span>Education</span></li>
                        <li className="navlist"><span>Resource</span></li>
                        <li className="navlist"><span>Pricing</span></li>
                    </ul>

                    <div className="navCTAbutton">
                        <li>Contact Sales</li>
                        <div className="CtaButton"><span className="PrimaryButtonWhiteText24">Download Mentora App</span> </div>
                    </div>
                </div>

                
            </section>
        </>
    )
};

export default Navigation;