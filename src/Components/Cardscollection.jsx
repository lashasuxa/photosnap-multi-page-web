import styled from 'styled-components';

const CardsCollectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  height: 100%;
  padding: 40px;
  color: white;
  background-size: cover;
  background-position: center;
`;

const Title = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
`;

const Author = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

const StyledHR = styled.hr`
  mix-blend-mode: normal;
  opacity: 0.25;
  border: 0;
  height: 1px;
  background: #FFFFFF;
`;

const ReadStory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const ReadStoryText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
`;

const Card1 = styled(Card)`
  background-image: url("/stories/desktop/mountains.jpg");
`;

const Card2 = styled(Card)`
  background-image: url("/stories/desktop/cityscapes.jpg");
`;

const Card3 = styled(Card)`
  background-image: url("/stories/desktop/18-days-voyage.jpg");
`;

const Card4 = styled(Card)`
  background-image: url("/stories/desktop/architecturals.jpg");
`;

function CardsCollection (){
    return (
        <CardsCollectionContainer>
            <Card1 >
                <Title>The Mountains</Title>
                <Author>by John Appleseed</Author>
                <StyledHR />
                <ReadStory>
                    <ReadStoryText>READ STORY</ReadStoryText>
                    <img src="/grey-arrow.png" alt="" />
                </ReadStory>
            </Card1>
            <Card2>
                <Title>Sunset Cityscapes</Title>
                <Author>by John Appleseed</Author>
                <StyledHR />
                <ReadStory>
                    <ReadStoryText>READ STORY</ReadStoryText>
                    <img src="/grey-arrow.png" alt="" />
                </ReadStory>
            </Card2>
            <Card3>
                <Title>18 Days Voyage</Title>
                <Author>by John Appleseed</Author>
                <StyledHR />
                <ReadStory>
                    <ReadStoryText>READ STORY</ReadStoryText>
                    <img src="/grey-arrow.png" alt="" />
                </ReadStory>
            </Card3>
            <Card4>
                <Title>Architecturals</Title>
                <Author>by John Appleseed</Author>
                <StyledHR />
                <ReadStory>
                    <ReadStoryText>READ STORY</ReadStoryText>
                    <img src="/grey-arrow.png" alt="" />
                </ReadStory>
            </Card4>
        </CardsCollectionContainer>
    )
}

export default CardsCollection;
