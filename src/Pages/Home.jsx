import styled from 'styled-components';
import CardsCollection from '../Components/CardsCollection';
import Highlights from '../Components/Highlights';
import { AllCollection } from "../Components/CardsCollection"; 


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
  height: ${props => props.height || '650px'};
  background: ${props => props.background || 'black'};
  color: ${props => props.color || 'white'};
  
  @media (max-width: 768px) {  // Adjust the breakpoint as per your needs
    flex-direction: column;
    align-items: center;
  }
`;

const BlackDiv = styled.div`
  width: 610px;
  background: black;
`;

const TextContainer = styled.div`
  width: 610px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  width: 387px;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.16667px;
  text-transform: uppercase;
  margin-bottom: 21px;
`;

const StyledP = styled.p`
  width: 387px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.6;
`;

const InviteDiv = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;

  align-items: center;
  width: 387px;
`;

function Home() {
  return (
    <HomeContainer>
      <Section height="650px" background="black" color="white">
        <BlackDiv>
          <TextContainer>
            <StyledH2>Create and share your photo stories.</StyledH2>
            <StyledP>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</StyledP>
            <InviteDiv>
              <StyledP>GET AN INVITE</StyledP>
              <img src="/public/grey-arrow.png" alt="" />
            </InviteDiv>
          </TextContainer>
        </BlackDiv>
        <img src="/home/desktop/create-and-share.jpg" alt="" />
      </Section>

      <Section height="600px"  background="white" color="black">
        <img src="/home/desktop/beautiful-stories.jpg" alt="" />
        <TextContainer>
          <StyledH2>BEAUTIFUL STORIES EVERY TIME</StyledH2>
          <StyledP>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</StyledP>
          <InviteDiv>
              <StyledP>GET AN INVITE</StyledP>
              <img src="/public/black-arrow.png" alt="" />
            </InviteDiv>
        </TextContainer>
      </Section>

      <Section height="600px" background="white" color="black">
        <TextContainer>
          <StyledH2>Designed for Everyone</StyledH2>
          <StyledP>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </StyledP>
          <InviteDiv>
              <StyledP>GET AN INVITE</StyledP>
              <img src="/public/black-arrow.png" alt="" />
            </InviteDiv>
        </TextContainer>
        <img src="/home/desktop/designed-for-everyone.jpg" alt="" />
      </Section>

      <CardsCollection collection={AllCollection.slice(0, 4)} />
      <Highlights maxHighlights={3} />
    </HomeContainer>
  );
}


export default Home;
