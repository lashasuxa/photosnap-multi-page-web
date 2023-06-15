import styled from 'styled-components';
import CardsCollection from '../Components/CardsCollection';
import { AllCollection } from '../Components/CardsCollection';


const StoryDiv = styled.div`
  background: url('/stories/desktop/moon-of-appalacia.jpg') no-repeat center center/cover;
  width: 100%;  //adjust as needed
  height: 650px;  //adjust as needed
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 112px;
 
  color: white;
`;

const StoryTitle = styled.h2`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.16667px;
  width: 387px;
  margin-bottom: 16px;
  
`;

const StoryInfo = styled.p`
  font-weight: 400;
font-size: 15px;
line-height: 25px;

max-width: 387px;


color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.6;
`;

const StoryLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 24px;
`;
const CollectionContainer = styled.div`
  display: flex;

`;

const ArrowImg = styled.img`
  margin-left: 10px;  //adjust as needed
`;


function Stories (){
    return (
        <div>
        <StoryDiv>
            <StoryInfo>LAST MONTH’S FEATURED STORY</StoryInfo>
            <StoryTitle>HAZY FULL MOON OF APPALACHIA</StoryTitle>
            <StoryInfo>March 2nd 2020 by John Appleseed</StoryInfo>
            <StoryInfo>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</StoryInfo>
            <StoryLink>
                <StoryInfo>READ THE STORY</StoryInfo>
                <ArrowImg src="/grey-arrow.png" alt="arrow" />
            </StoryLink>
        </StoryDiv>
         
        <CollectionContainer>
        <CardsCollection collection={AllCollection}/>  
        </CollectionContainer>
     
     
        
        </div>
        
    )
}

export default Stories;
