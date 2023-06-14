import styled from 'styled-components';

const HighlightsContainer = styled.div`
margin-top: 160px;
margin-bottom: 160px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 475px;
  gap: 30px;
`;

const Highlight = styled.div`
  display: flex;
  width: 350px;
  height: ;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HighlightTitle = styled.h6`
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 16px;
  margin-top: ;
`;

const HighlightText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.6;
`;


const allHighlights = [
  {
    imgSrc: "/features/desktop/responsive.svg",
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
  },
  {
    imgSrc: "/features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
  },
  {
    imgSrc: "/features/desktop/embed.svg",
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
  },
  {
    imgSrc: "/features/desktop/custom-domain.svg",
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
  },
  {
    imgSrc: "/features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
  },
  {
    imgSrc: "/features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
  }
];

function Highlights({ maxHighlights = allHighlights.length }) {
  return (
      <HighlightsContainer>
          {allHighlights.slice(0, maxHighlights).map((highlight, index) => (
              <Highlight key={index}>
                  <img src={highlight.imgSrc} alt="" />
                  <HighlightTitle>{highlight.title}</HighlightTitle>
                  <HighlightText>{highlight.text}</HighlightText>
              </Highlight>
          ))}
      </HighlightsContainer>
  )
}



export default Highlights;
