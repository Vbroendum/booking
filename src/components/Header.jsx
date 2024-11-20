import React from 'react';
import logo from '../assets/CPHBusiness_Logo.svg';

function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#228BE6', color: 'white', fontWeight: '500' }}>
      <img src={logo} alt="CPH Business Logo" width="100" />
      <div style={{ display: 'flex', gap: '20px' }}>
        <div>Forside</div>
        <div>Mine Bookinger</div>
      </div>
    </div>
  );
}

export default Header;