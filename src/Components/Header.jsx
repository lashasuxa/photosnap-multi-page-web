import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px; // Adjust this for the space between the links
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
`;

function Header (){
    return (
        <HeaderContainer>
            <div>
                <img src="/logo-black.png" alt="" />
                
            </div>
            <NavContainer>
                <StyledLink to="/stories">Stories</StyledLink>
                <StyledLink to="/features">Features</StyledLink>
                <StyledLink to="/pricing">Pricing</StyledLink>
            </NavContainer>
            <InviteButton>GET AN INVITE</InviteButton>
        </HeaderContainer>
    )
}

export default Header;
