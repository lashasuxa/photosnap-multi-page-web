
import styled from 'styled-components';



const AllCollection = [
    {
      imgSrc: "/stories/desktop/mountains.jpg",
      date: "April 16th 2020",
      title: "The Mountains",
      author: "by John Appleseed",
    },
    {
      imgSrc: "/stories/desktop/cityscapes.jpg",
      date: "April 14th 2020",
      title: "Sunset Cityscapes",
      author: "by Benjamin Cruz",
    },
    {
      imgSrc: "/stories/desktop/18-days-voyage.jpg",
      date: "April 9th 2020",
      title: "18 Days Voyage",
      author: "by Alexei Borodin",
    },
    {
      imgSrc: "/stories/desktop/architecturals.jpg",
      date: "April 16th 2020",
      title: "Architecturals",
      author: "by Samantha Brooke",
    },
    {
      imgSrc: "/stories/desktop/world-tour.jpg",
      date: "April 7th 2020",
      title: "World Tour 2019",
      author: "by Timothy Wagner",
    },
    {
      imgSrc: "/stories/desktop/unforeseen-corners.jpg",
      date: "April 3rd 2020",
      title: "Unforeseen Corners",
      author: "by William Malcolm",
    },
    {
      imgSrc: "/stories/desktop/king-on-africa.jpg",
      date: "March 29th 2020",
      title: "King on Africa: Part II",
      author: "by Tim Hillenburg",
    },
    {
      imgSrc: "/stories/desktop/trip-to-nowhere.jpg",
      date: "March 21st 2020",
      title: "The Trip to Nowhere",
      author: "by Felicia Rourke",
    },
    {
      imgSrc: "/stories/desktop/rage-of-the-sea.jpg",
      date: "March 19th 2020",
      title: "Rage of The Sea",
      author: "by Mohammed Abdul",
    },
    {
      imgSrc: "/stories/desktop/running-free.jpg",
      date: "March 16th 2020",
      title: "Running Free",
      author: "by Michelle",
    },
    {
      imgSrc: "/stories/desktop/behind-the-waves.jpg",
      date: "March 11th 2020",
      title: "Behind the Waves",
      author: "by Lamarr Wilson",
    },
    {
      imgSrc: "/stories/desktop/calm-waters.jpg",
      date: "March 9th 2020",
      title: "Calm Waters",
      author: "by Samantha Brooke",
    },
    {
      imgSrc: "/stories/desktop/milky-way.jpg",
      date: "March 5th 2020",
      title: "The Milky Way",
      author: "by Benjamin Cruz",
    },
    {
      imgSrc: "/stories/desktop/dark-forest.jpg",
      date: "March 4th 2020",
      title: "Night at The Dark Forest",
      author: "by Mohammed Abdul",
    },
    {
      imgSrc: "/stories/desktop/somwarpet.jpg",
      date: "March 1st 2020",
      title: "Somwarpet’s Beauty",
      author: "by Michelle",
    },
    {
      imgSrc: "/stories/desktop/land-of-dreams.jpg",
      date: "February 25th 2020",
      title: "Land of Dreams",
      author: "by William Malcolm",
    },
  ];

  export { AllCollection };


const CardsCollectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  background-color: white;
  
  width: 100%;
  max-width: 1440px;
  
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  width: 360px;

  padding: 40px;
  color: white;
  background-size: cover;
  background-position: center;

  transition: margin-top 0.2s ease-in-out; // Smooth transition for the movement

  &:hover {
    margin-top: -10px;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
  }
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




function CardsCollection({ collection = AllCollection }) {
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