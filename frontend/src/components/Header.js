import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown,Badge } from 'react-bootstrap'

import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
 // eslint-disable-next-line
import { stripColors } from 'colors'
import '../css/Header.css';

const img='images/organicbasklogo2d.jpg';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    
    <header>
    
    <div className=' fixed-top containerfluid'>
      <Navbar className="color-nav" variant='light' expand='lg' collapseOnSelect >
      
      
        <Container>
        
        <div classsName='titlehead2'>
          <LinkContainer to='/'>
          
          <img src={img} alt='...' height="80px" ></img>
            
          </LinkContainer>
          </div>
          
          
        
        <div classsName='titlehead'>
          <LinkContainer to='/'>
          
            <Navbar.Brand><h1>Organic Basket</h1></Navbar.Brand>
            
          </LinkContainer>
          </div>
          
        
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />}/>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                 <h3><i className='fas fa-shopping-cart'></i> Cart
                  {cartItems.length > 0 && (  
                 <Badge pill bg="primary">
                 ( {cartItems.reduce((a, c) => a + c.qty, 0)}  )
                  </Badge>  
        
                  )}
                  </h3>
                </Nav.Link>
              </LinkContainer>
             
                {userInfo ? (<h3>
               <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'> 
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown></h3>
              ) : (
                <LinkContainer to='/login'>
                
                  <Nav.Link>
                  <h3> <i className='fas fa-user' ></i> Sign In</h3> 
                    
                  </Nav.Link>
                  
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
              <h3> <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                </h3>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </header>
    
  )
}

export default Header
