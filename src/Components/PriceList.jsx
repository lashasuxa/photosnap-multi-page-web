import React, { useState } from 'react';
import styled from 'styled-components';

const PriceListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ToggleButtonContainer=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 40px;
    gap: 32px;
`;

const ToggleText = styled.p`
  
    opacity: ${props => props.isActive ? 1 : 0.5};
`;

const ToggleButton = styled.div`
  background-color: #DFDFDF;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.yearly ? 'flex-end' : 'flex-start'};
  padding: 4px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

const ToggleCircle = styled.div`
  background-color: black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const Card = styled.div`
  background-color: #F5F5F5;
  width:350px;
  height: 407px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 0 40px;
  gap: 30px;
  margin-bottom: 160px;
`;

const CardTitle = styled.h2`
  
`;

const CardText = styled.p``;

const CardPrice = styled.div``;

const PriceAmount = styled.div``;

const PricePeriod = styled.div``;

const CardButton = styled.button`
height: 40px;
background: #DFDFDF;
color: black;
font-size: 12px;
line-height: 16px;
text-align: center;
letter-spacing: 2px;
text-transform: uppercase;

`;

const priceData = [
  { plan: 'Basic', monthlyPrice: 19, yearlyPrice: 190, text: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.' },
  { plan: 'Pro', monthlyPrice: 39, yearlyPrice: 390, text: 'More advanced features available. Recommended for photography veterans and professionals.' },
  { plan: 'Business', monthlyPrice: 99, yearlyPrice: 990, text: 'Additional features available such as more detailed metrics. Recommended for business owners.' },
];

function PriceList() {
  const [yearly, setYearly] = useState(false);

  const toggleYearly = () => setYearly(!yearly);

  return (
    <>
      <ToggleButtonContainer>
        <ToggleText isActive={!yearly}>Monthly</ToggleText>
        <ToggleButton yearly={yearly} onClick={toggleYearly}>
          <ToggleCircle />
        </ToggleButton>
        <ToggleText isActive={yearly}>Yearly</ToggleText>
      </ToggleButtonContainer>
      <PriceListContainer>
        {priceData.map(({ plan, monthlyPrice, yearlyPrice, text }, index) => (
          <Card key={index}>
            <CardTitle>{plan}</CardTitle>
            <CardText>{text}</CardText>
            <CardPrice>
              <PriceAmount>${(yearly ? yearlyPrice : monthlyPrice).toFixed(2)}</PriceAmount>
              <PricePeriod>{yearly ? 'year' : 'month'}</PricePeriod>
            </CardPrice>
            <CardButton>Pick Plan</CardButton>
          </Card>
        ))}
      </PriceListContainer>
    </>
  );
}

export default PriceList;
