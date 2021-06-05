import React,{useState} from 'react'
import {Navbar, NavbarBrand, Jumbotron,Nav,NavbarToggler,Collapse,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

export const HeaderComponent = () => {
    const [isNavOpen,changeIsNavOpen] = useState(false);
    const toggleNav = ()=>{
        changeIsNavOpen(!isNavOpen);
    }
    return (
        <>
        <Navbar dark expand="md">
        <div className='container'>
            <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className='mr-auto' href='/'>
              <img src='./assets/images/logo.png' height='30' width='41' alt='Failed bitch'/>
              
              </NavbarBrand>
              <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar>
                  <NavItem>
                      <NavLink className='nav-link' to="/home">
                          <span className='fa fa-home fa-lg'/>
                          Home
                      </NavLink>

                      <NavLink className='nav-link' to="/about">
                          <span className='fa fa-info fa-lg'/>
                          About Us
                      </NavLink>

                      <NavLink className='nav-link' to="/menu">
                          <span className='fa fa-list fa-lg'/>
                          Menu
                      </NavLink>
                      <NavLink className='nav-link' to="/contact-us">
                          <span className='fa fa-phone fa-lg'/>
                          Contact Us
                      </NavLink>
                  </NavItem>
              </Nav>
              </Collapse>
        </div>
        </Navbar>
        <Jumbotron>
            <div className='container'>
                <div className='row row-header'>
                    <div className="col-12 col-sm-6">
                        <h1>Aryamann Ka Dhaba!</h1>
                        <p>
                    Just gonna stand there and watch me burn,
                    that's alright because I like the way it hurts. 
                    - Love The Way You Lie


                        </p>
                    </div>

                </div>
            </div>
        </Jumbotron>
        </>
    )
}



export default HeaderComponent;