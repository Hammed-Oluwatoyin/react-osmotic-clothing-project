import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
    
      <Logo className='logo' />
    </Link>
    <Link className='home'>
    <h2>OSMOTIC CLOTHING</h2>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
       <h2>HOME</h2> 
      </Link>
      <Link className='option' to='/shop'>
        <h2>SHOP</h2>
      </Link>
      <Link className='option' to='/shop'>
        <h2>CONTACT</h2>
      </Link>
      <Link className='option' to='/shop'>
        <h2>BOOK</h2>
      </Link>
      <Link className='option' to='/shop'>
        <h2>TESTIMONIALS</h2>
      </Link>
      {
        currentUser ?
        (<h2 className='option' onClick={() => auth.signOut()}> SIGN OUT</h2>)
        :
        (<Link className='option' to='/signin'><h2>SIGN IN</h2></Link>)

      }


    </div>
  </div>
);

export default Header;