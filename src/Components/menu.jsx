import './menu.css';
import logo from '../assets/logo_1.jpeg';
import { useState } from 'react'; 

function Menu() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="header">
            <div className="container headerContainer">
                <div className='logo'>
                    Vinay
                </div>

          
                <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className={isMobileMenuOpen ? "fa fa-times" : "fa fa-bars"}></i>
                </div>

              
                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <a href='#about-section'>Home</a>
                        <a href='#about-section'>About Me</a>
                        <a href='#cv-section'>MyCV</a>
                        <a href='#Project-section'>Projects</a>
                        <a href='#Contact-section'>Contact Me</a>
                    </div>
                )}

                <div className="header-nav">
                    <a href='#about-section'>Home</a>
                    <a href='#about-section'>About Me</a>
                    <a href='#cv-section'>MyCV</a>
                    <a href='#Project-section'>Projects</a>
                    <a href='#Contact-section'>Contact Me</a>
                </div>
{/* 
                <div style={{ width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                    <h1> <i className="fa fa-moon-o"></i></h1>
                </div> */}
            </div>
        </div>
    )
}

export default Menu;
