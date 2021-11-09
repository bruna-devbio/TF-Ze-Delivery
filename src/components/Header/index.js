import React from "react";
import './index.css';
import './responsive.css';
import logoPreto from '../../assets/img/LogoPreto.png';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({
  children
}) => {
  return (
    <header>
      <div className='header-container'>
        <div className='header'>
          <div className='header-user'>
            <img className='header-img-user' src={logoPreto} alt='logo-user' />
          </div>
          <div className='header-icon'>
            <LogoutIcon className='header-logout-icon' />
          </div>
        </div>
        <div className='header-title'>
          <h1 className='header-h1'>
            {children}
          </h1>
        </div>
      </div>
    </header>
  )
}

export default Header;