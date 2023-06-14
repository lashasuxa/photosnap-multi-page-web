import styled from 'styled-components';

const SubHeadContainer = styled.div`
  display: flex;
  background: black;
  width: 100%;
  color: #FFFFFF;
`;

const SubHeadContent = styled.div`
  display: flex;
  padding:0 112px;
  flex-direction: column;
  justify-content: center;
`;

const SubHeadTitle = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.16667px;
  margin-bottom:21px ;
`;

const SubHeadText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  mix-blend-mode: normal;
  opacity: 0.6;
`;

const SubHeadImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
`;

const subHeadItems = [
  {
    title: "FEATURES",
    text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    img: "/features/desktop/hero.jpg",
  },
  {
    title: "PRICING",
    text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    img: "/pricing/desktop/hero.jpg",
  }
];

function SubHead({ itemIndex = 0 }) {
    const item = subHeadItems[itemIndex];
    return (
        <SubHeadContainer>
            <SubHeadContent>
                <SubHeadTitle>{item.title}</SubHeadTitle>
                <SubHeadText>{item.text}</SubHeadText>
            </SubHeadContent>
            <SubHeadImage src={item.img} alt={item.title} />
        </SubHeadContainer>
    )
}

export default SubHead;
