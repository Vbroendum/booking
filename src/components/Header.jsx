import React from 'react';
import logo from '../assets/CPHBusiness_Logo.svg';
import { Link } from '@tanstack/react-router';

function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', backgroundColor: '#228BE6', color: 'white', fontWeight: '500' }}>
        <Link style={{lineHeight: "normal", paddingTop: "2px"}} to="/frontpage"><img src={logo} alt="CPH Business Logo" width="100" /></Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        
        <div><Link to="/" 
        style={{textDecoration: 'none', color: 'white', fontWeight: '500'}}
        onMouseOver={(e) => (e.target.style.color = 'black')}
        onMouseOut={(e) => (e.target.style.color = 'white')}
        >Forside</Link></div>

        <div><Link to="/" 
        style={{textDecoration: 'none', color: 'white', fontWeight: '500'}} 
        onMouseOver={(e) => (e.target.style.color = 'black')}
        onMouseOut={(e) => (e.target.style.color = 'white')}
        >Mine bookinger</Link></div>
      </div>
    </div>
  );
}

export default Header;