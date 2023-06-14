import styled from 'styled-components';


 const rowCollection = [
  {
      imgSrc: "/stories/desktop/mountains.jpg",
      title: "The Mountains",
      author: "by John Appleseed"
  },
  {
      imgSrc: "/stories/desktop/cityscapes.jpg",
      title: "Sunset Cityscapes",
      author: "by John Appleseed"
  },
  {
      imgSrc: "/stories/desktop/18-days-voyage.jpg",
      title: "18 Days Voyage",
      author: "by John Appleseed"
  },
  {
      imgSrc: "/stories/desktop/architecturals.jpg",
      title: "Architecturals",
      author: "by John Appleseed"
  },
];

export const AllCollection = [
  {
      imgSrc: "/stories/desktop/mountains.jpg",
      date:"April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/cityscapes.jpg",
      date:"April 16th 2020",
      title: "Sunset Cityscapes",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/18-days-voyage.jpg",
      date:"April 16th 2020",
      title: "18 Days Voyage",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/architecturals.jpg",
      date:"April 16th 2020",
      title: "Architecturals",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/world-tour.jpg",
      date:"April 7th 2020",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
     
  },
  {
      imgSrc: "/stories/desktop/unforeseen-corners.jpg",
      date:"April 3rd 2020",
      title: "Unforeseen Corners",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/18-days-voyage.jpg",
      date:"April 16th 2020",
      title: "18 Days Voyage",
      author: "by William Malcolm",
     
  },
  {
      imgSrc: "/stories/desktop/architecturals.jpg",
      date:"April 16th 2020",
      title: "Architecturals",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/mountains.jpg",
      date:"April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/cityscapes.jpg",
      date:"April 16th 2020",
      title: "Sunset Cityscapes",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/18-days-voyage.jpg",
      date:"April 16th 2020",
      title: "18 Days Voyage",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/architecturals.jpg",
      date:"April 16th 2020",
      title: "Architecturals",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/mountains.jpg",
      date:"April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/cityscapes.jpg",
      date:"April 16th 2020",
      title: "Sunset Cityscapes",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/18-days-voyage.jpg",
      date:"April 16th 2020",
      title: "18 Days Voyage",
      author: "by John Appleseed",
     
  },
  {
      imgSrc: "/stories/desktop/architecturals.jpg",
      date:"April 16th 2020",
      title: "Architecturals",
      author: "by John Appleseed",
     
  },
];



const CardsCollectionContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
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
  width:360px;
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




function CardsCollection({ collection = rowCollection }) {
  return (
      <CardsCollectionContainer>
          {collection.map((item, index) => (
              <Card
                  key={index}
                  style={{ backgroundImage: `url(${item.imgSrc})` }}
              >
                  <Title>{item.title}</Title>
                  <Author>{item.author}</Author>
                  <StyledHR />
                  <ReadStory>
                      <ReadStoryText>READ STORY</ReadStoryText>
                      <img src="/grey-arrow.png" alt="" />
                  </ReadStory>
              </Card>
          ))}
      </CardsCollectionContainer>
  );
}

export default CardsCollection;