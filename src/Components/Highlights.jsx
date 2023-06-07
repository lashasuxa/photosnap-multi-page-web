import styled from 'styled-components';

const HighlightsContainer = styled.div`
  display: flex;
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

function Highlights (){
    return (
        <HighlightsContainer>
            <Highlight>
                <img src="/features/desktop/responsive.svg" alt="" />
                <HighlightTitle>100% Responsive</HighlightTitle>
                <HighlightText>
                No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.
                </HighlightText>
            </Highlight>
            <Highlight>
                <img src="/features/desktop/no-limit.svg" alt="" />
                <HighlightTitle>No Photo Upload Limit</HighlightTitle>
                <HighlightText>
                Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.
                </HighlightText>
            </Highlight>
            <Highlight>
                <img src="/features/desktop/embed.svg" alt="" />
                <HighlightTitle>Available to Embed</HighlightTitle>
                <HighlightText>
                Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. 
                </HighlightText>
            </Highlight>
        </HighlightsContainer>
    )
}

export default Highlights;
