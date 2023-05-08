import React from 'react';
import styled from 'styled-components';
// icons
import words from '../images/words-icon.svg';
import archive from '../images/archive-icon.svg';
import logoutIcon from '../images/logout-icon.svg';

const NavbarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 80px;
  height: 100vh;
  border-right: 1px rgb(239, 243, 244) solid;
`

const Links = styled.ul`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
`

const Navbar: React.FC = () => {
  function logout() {
    localStorage.removeItem('token');
    window.location.href = "/auth";
  }

  return (
    <NavbarStyled>
      <Links>
        <a href='/words'><img src={words} alt="words" /></a>
        <button><img src={archive} alt="archive" /></button>
        <button onClick={logout}><img src={logoutIcon} alt="logout" /></button>
      </Links>
    </NavbarStyled>
  )
}

export default Navbar;