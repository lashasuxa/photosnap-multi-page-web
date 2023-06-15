import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding:  20px 165px; // Add some padding on sides for better look on smaller screens
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px; // Adjust this for the space between the links

  @media (max-width: 400px) {
    display: none; // Hide on screens smaller than 400px
  }
`;

const StyledLink = styled(Link)`
  color: inherit; // This makes the links have the same color as normal text
  text-decoration: none; // This removes the underline from the links
`;

const InviteButton = styled.button`
  width: 158px;
  height: 40px;
  background: black;
  color: white;
  letter-spacing: 2px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  border: none;
  cursor: pointer;

  @media (max-width: 400px) {
    display: none; // Hide on screens smaller than 400px
  }
`;

const BurgerMenuIcon = styled.div`
  display: none;

  @media (max-width: 400px) {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
  }
`;

const CloseIcon = styled.div`
  display: none;

  @media (max-width: 400px) {
    display: ${({ visible }) => (visible ? 'block' : 'none')};
  }
`;

const Modal = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px; // Height of the Header
  left: 0;
  width: 100%;
  height: 253px;
  background-color: white;
  gap: 20px;
  padding: 20px;
`;

function Header (){
  const [modalVisible, setModalVisible] = useState(false);

  const handleBurgerMenuClick = () => {
    setModalVisible(!modalVisible);
  }

  return (
    <HeaderContainer>
        <Link to="/"> 
          <img src="/logo-black.png" alt="Logo" />
        </Link>

        <NavContainer>
            <StyledLink to="/stories">Stories</StyledLink>
            <StyledLink to="/features">Features</StyledLink>
            <StyledLink to="/pricing">Pricing</StyledLink>
        </NavContainer>
        
        <InviteButton>GET AN INVITE</InviteButton>

        <BurgerMenuIcon onClick={handleBurgerMenuClick} visible={!modalVisible}>
            <img src="/shared/mobile/menu.svg" alt="Menu" />
        </BurgerMenuIcon>

        <CloseIcon onClick={handleBurgerMenuClick} visible={modalVisible}>
            <img src="/shared/mobile/close.svg" alt="Close" />
        </CloseIcon>

        <Modal visible={modalVisible}>
            <StyledLink to="/stories">Stories</StyledLink>
            <StyledLink to="/features">Features</StyledLink>
            <StyledLink to="/pricing">Pricing</StyledLink>
            <hr />
            <InviteButton onClick={() => setModalVisible(false)}>GET AN INVITE</InviteButton>
        </Modal>
    </HeaderContainer>
  )
}

export default Header;
