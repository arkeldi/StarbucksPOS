import React, { useState } from 'react';
import styled from 'styled-components';

const BottomButton = () => {
  return (
    <Button >
      <ButtonImg src={require('../images/bag.jpg')} />
    </Button>
  );
};

const Product = (props) => {
  const [sizeImage, setSizeImage] = useState(require('../images/product/size_default.png'));

  const handleSizeButtonClick = (size) => {
    if (size === 'short') {
      setSizeImage(require('../images/product/size_s.png'));
    } else if (size === 'tall') {
      setSizeImage(require('../images/product/size_t.png'));
    } else if (size === 'grande') {
      setSizeImage(require('../images/product/size_g.png'));
    } else if (size === 'venti') {
      setSizeImage(require('../images/product/size_v.png'));
    }
  };

  return (
    <>
      <TopDiv />
      <CustomizationDiv>
        <SizesDiv>
          <SizesOptionsDiv>
            <SizesText>Size options</SizesText>
            <div style={{position: 'relative'}}>
            <img src={sizeImage} style={{ position: 'absolute', marginTop: '10px', marginLeft: '50px', marginRight: '50px', width: '70%', zIndex: '0'}} />
              <div style={{marginLeft: '42px' }}>
                <SizeButton onClick={() => handleSizeButtonClick('short')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('tall')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('grande')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('venti')}></SizeButton>
              </div>
            </div>
          </SizesOptionsDiv>
        </SizesDiv>
        <OptionsDiv>
          <OptionsCustomDiv>
            <CustomText>Customizations</CustomText>
          </OptionsCustomDiv>
        </OptionsDiv>
      </CustomizationDiv>
      <BottomDiv>
        <BottomButton />
      </BottomDiv>
    </>
  );
};

const TopDiv = styled.div`
  height: 330px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 50px;
`;

const BottomDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #1e3932;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px; // add padding to the right to create the 50px margin
`;

const ButtonImg = styled.img`
  height: 50px;
  width: 50px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 250px;
`;

const CustomizationDiv  = styled.div`
  height: 600px;
  width: 100%;
  background-color: pink;
  display: flex;
`;

const SizesDiv = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsDiv  = styled.div`
  height: 600px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const SizesOptionsDiv  = styled.div`
  margin-top: 30px;
  height: 600px;
  width: 60%;
  background-color: white;
  
  
`;

const OptionsCustomDiv  = styled.div`
  margin-top: 30px;
  height: 600px;
  width: 60%;
  background-color: white;
  margin-left: 30px;
`;

const SizesText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const CustomText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const SizeButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  padding: 0px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  margin-left: 26px;
  margin-top: 28px;
  
`;

export default Product;
