import React from 'react';
import logo from '../assets/CPHBusiness_Logo.svg';
import { Link } from '@tanstack/react-router';

function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#228BE6', color: 'white', fontWeight: '500' }}>
        <Link to="/frontpage"><img src={logo} alt="CPH Business Logo" width="100" /></Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div><Link to="/">Forside</Link></div>
        <div><Link to="/" style={{textDecoration: 'none'}}>Mine bookinger</Link></div>
      </div>
    </div>
  );
}

export default Header;