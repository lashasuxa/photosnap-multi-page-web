import styled from 'styled-components';

const InviteContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 165px;
  background-image: url('/shared/desktop/bg-beta.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextContainer = styled.div`
  width: 400px;
   color: #FFFFFF;
  `;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonText = styled.span`
  color: #FFFFFF;
  font-weight: 700;
font-size: 12px;
line-height: 16px;


text-align: right;
letter-spacing: 2px;
text-decoration-line: underline;
`;

const Text = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 4.16667px;
  text-transform: uppercase;
`;
const Arrow = styled.img`
  margin-left: 22px;
  cursor: pointer;
`;

function Invite() {
  return (
    <InviteContainer>
      <TextContainer>
        <Text>We’re in beta.</Text>
        <Text>Get your invite today!</Text>
      </TextContainer>
      <ButtonContainer>
        <ButtonText>GET AN INVITE</ButtonText>
        <Arrow src="/grey-arrow.png" alt="arrow" />
      </ButtonContainer>
    </InviteContainer>
  );
}

export default Invite;
