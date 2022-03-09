import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
//This is the scroll effect. We define the state as fale for scrollNav and make it run true when the window scroll passes 80 pixles in the Y
    const changeNav=() => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
//This is a live update to changeNav that runs changeNav and waits for scroll to >80
    useEffect( ()=> {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
    {/* note IconContext.Provider allows you to set the color of all icons in the children in 1 go */}
    <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                {/* We nake the scroll to top by doing an on click event, toggle home, and scroll to top from react-scroll*/}
                <NavLogo to='/' onClick={toggleHome}>
                    dolla
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks 
                        to="about"
                        smooth={true}
                        duration={500}
                        /* spy tells you which element you are clicking on */
                        spy={true}
                        exact='true'
                        /* -80 is used to offset the toolbar */
                        offset={-80}
                        >
                            About
                        </NavLinks>
                    </NavItem>
                    {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                    <NavItem>
                        <NavLinks 
                        to="discover"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Discover
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks 
                        to="services" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Services
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        {/* Note that links to="..." refer to the data sections, ie. getelementbyid. Finds by id=... */}
                        <NavLinks to="signup"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >
                            Signup
                        </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar