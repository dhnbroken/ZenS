import React from 'react';
import { logoUrl, avatarUrl } from 'src/assets/constant';
const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='container'>
          <nav className='header__nav'>
            <img className='logo' src={logoUrl} alt="logo" width='172' height='60'/>
            <div className='header-right'>
              <p className='text-right'>
                <em className='title'>Handicrafted by</em>
                <br/> Jim HLS
              </p>
              <img className='avatar' src={avatarUrl}/>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
