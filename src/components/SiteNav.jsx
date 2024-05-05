import { Link as ScrollLink } from 'react-scroll';
import {Nav, Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavItem, NavLink} from 'react-bootstrap';
import { useState } from 'react';

function SiteNav()
{

    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);


    const handleNavClick = (event) => {
        setOpen(false);
        event.target.blur(); 
      };
      
    return (
        <>
            <Navbar expand="lg" bg="primary" fixed="top" className="navbar-dark" id="sideNav">
                <NavbarBrand>
                    <span className="d-block d-lg-none">Joseph L. DiLonardo</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="images/profile.jpg" alt="" />
                    </span>
                </NavbarBrand>
                <NavbarToggle onClick={handleToggle} id="navbarBtn" aria-controls="basic-navbar-nav"  />
                <NavbarCollapse in={open} id="basic-navbar-nav"  >
                    <Nav>
                        <NavItem>
                            <ScrollLink href="#" to="about" activeClass="active" spy={true} onClick={handleNavClick} className='nav-link'>About</ScrollLink>
                        </NavItem>
                        <NavItem>
                            <ScrollLink href="#" to="experience" activeClass="active" spy={true} onClick={handleNavClick} className='nav-link'>Experience</ScrollLink>
                        </NavItem>
                        <NavItem>
                            <ScrollLink href="#" to="education" activeClass="active" spy={true} onClick={handleNavClick} className='nav-link'>Education</ScrollLink>
                        </NavItem>
                        <NavItem>
                            <ScrollLink href="#" to="skills" activeClass="active" spy={true} onClick={handleNavClick} className='nav-link'>Skills</ScrollLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="pdfs/Dilonardo_Joseph_L_Resume.pdf" onClick={handleNavClick} target='_blank' className='ignore-active' >Resume</NavLink>
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );
}
export default SiteNav