import styled from 'styled-components';
import CardsCollection from '../Components/CardsCollection';
import Highlights from '../Components/Highlights';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section1 = styled.div`
  display: flex;
  height: 650px;
`;

const BlackDiv = styled.div`
  width: 610px;
  background: black;
`;

const Section2 = styled.div`
  display: flex;
  height: 600px;
`;

const Section2Text = styled.div`
  width: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
`;

const Section3 = styled.div`
  display: flex;
  height: 600px;
`;

const Section3Text = styled.div`
  width: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
`;

function Home() {
  return (
    <HomeContainer>
      <Section1>
        <BlackDiv>
        <Section2Text>
          <h2>BEAUTIFUL STORIES
            EVERY TIME</h2>
        <p>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
        <div>
            <p>VIEW THE STORIES</p>
            <img src="/public/grey-arrow.png" alt="" />
        </div>
        </Section2Text>
        </BlackDiv>
        <img src="/home/desktop/create-and-share.jpg" alt="" />
        
      </Section1>
      <Section2>
        <img src="/home/desktop/beautiful-stories.jpg" alt="" />
   
      </Section2>
      <Section3>
        <Section3Text>
          <p>Designed for Everyone</p>
        </Section3Text>
        <img src="/home/desktop/designed-for-everyone.jpg" alt="" />
      </Section3>
      <CardsCollection />
      <Highlights />
    </HomeContainer>
  );
}

export default Home;
