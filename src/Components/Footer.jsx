import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 250px;
  background: black;
  color: white;
  padding: 64px 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px; // Adjust this for the space between the images
`;

const StyledLink = styled(Link)`
  color: inherit; // This makes the links have the same color as normal text
  text-decoration: none; // This removes the underline from the links
`;

const InviteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; // Adjust this for the space between the text and the image
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

function Footer (){
    return (
        <FooterContainer>
            <div>
                <img src="/logo-white.png" alt="" />
                <SocialContainer>
                    <img src="/shared/desktop/facebook.svg" alt="" />
                    <img src="/shared/desktop/youtube.svg" alt="" />
                    <img src="/shared/desktop/twitter.svg" alt="" />
                    <img src="/shared/desktop/pinterest.svg" alt="" />
                    <img src="/shared/desktop/instagram.svg" alt="" />
                </SocialContainer>
            </div>
            <LinksContainer>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/stories">Stories</StyledLink>
                <StyledLink to="/features">Features</StyledLink>
                <StyledLink to="/pricing">Pricing</StyledLink>
            </LinksContainer>
            <div>
                <InviteContainer>
                    <p>GET AN INVITATION</p>
                    <img src="/grey-arrow.png" alt="" />
                </InviteContainer>
                <p>Copyright 2019. All Rights Reserved</p>
            </div>
        </FooterContainer>
    )
}

export default Footer;
