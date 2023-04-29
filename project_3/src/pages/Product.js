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

  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
  };

  

  return (
    <>
      <div style={{marginTop: '20px'}}>
        <text style={{marginLeft: '125px', fontFamily: 'Helvetica Neue, sans-serif', fontSize: '15px'}}>Menu / Americano</text>
      </div>
      <TopDiv>
        <img src={require('../images/product/order_1.png')} style={{ width: '1200px'}}/>
      </TopDiv>
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
              <div >
                
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '60px 0 30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Decaf</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Shots</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Syrup</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Milk</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={handleButtonClick} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Custom</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
              </div>
          </OptionsCustomDiv>
        </OptionsDiv>
        <Overlay showOverlay={showOverlay}>
          <CloseButton onClick={handleCloseClick}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <label className="close">close</label>
          </CloseButton>
          <selectionDiv style={{display: 'flex', backgroundColor: 'pink', height: '900px', width: '500px', margin: 'auto'}} >
            <customOrderText style={{fontSize: '32px', fontFamily: 'Helvetica Neue, sans-serif', fontWeight: 'bold'}}>Customizations</customOrderText>
          </selectionDiv>
          <DoneButton
          style={{ 
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer',
            height: '50px',
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            marginRight: '20px',
            marginBottom: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
           onClick={handleCloseClick}>Done</DoneButton>
        </Overlay>
      </CustomizationDiv>
      <InfoDiv>
        <div style={{height:"80px", width: '80px', marginRight: '100px'}}>
          <img src={require('../images/logo.png')} style={{ width: '80px'}}/>   
        </div>
        <div>
          <text style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}> Americano is a shot of espresso with hot water added. It has a rich and bold flavor.</text>
        </div>
      </InfoDiv>
      <EndDiv >
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            width: '1200px',
            height: '300px',
            border: 'none', 
            background: 'white'}}>
          <div style={{
            display: 'flex',
            width: '1200px',
            height: '200px',
            border: 'none', 
            background: 'blue'}} >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '200px',
                border: 'none', 
                background: 'white'}}> 
                  <a style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '25px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }}>About Us</a>
                  <a style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} onClick={() => alert('Our Company pop-up window')}>Our Company</a>
                  <a style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }} onClick={() => alert('Our Coffee pop-up window')}>Our Coffee</a>
                  <a style={{ cursor: 'pointer', fontSize: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }} onClick={() => alert('Contact pop-up window')}>Contact</a>
                </div>
              <div style={{
                display: 'flex',
                flexFlow: 'column',
                width: '50%',
                height: '200px',
                border: 'none', 
                background: 'white',

                }}> 
                <a style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '25px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }}>Social Media</a>
                <div style={{ width: '100%',
                height: '100px', background: 'white'}} >
                  <a href="https://open.spotify.com/user/starbucks"><img src={require('../images/spotify.png')} alt="Image 1"></img></a>
                  <a href="https://www.facebook.com/Starbucks/"><img src={require('../images/fb.png')} alt="Image 2"></img></a>
                  <a href="https://www.pinterest.com/starbucks/"><img src={require('../images/pinterest.png')}></img></a>
                  <a href="https://www.instagram.com/starbucks/"><img src={require('../images/insta.png')} alt="Image 4"></img></a>
                  <a href="https://www.youtube.com/starbucks"><img src={require('../images/youtube.png')} alt="Image 5"></img></a>
                  <a href="https://twitter.com/starbucks/"><img src={require('../images/twitter.png')} alt="Image 6"></img></a>
                </div>
              </div>
              
            </div>
            <div style={{
                display: 'flex',
                flexFlow: 'column',
                width: '100%',
                height: '200px',
                border: 'none', 
                background: 'white',

                }}>
                  <div style={{marginBottom: '25px'}} >
                    <a style={{marginRight: '15px', textDecoration: 'none', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} href="#">Privacy Notice</a>
                    <text> | </text>
                    <a style={{marginLeft: '15px', textDecoration: 'none', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} href="#">Terms of Use</a>
                  </div>
                  <div>
                    <text style = {{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}}>© 2023 Starbucks Coffee Company. All rights reserved.</text>
                  </div>
                  
              </div>
        </div>
      </EndDiv>
      <BottomDiv>
        <button 
          style={{ 
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            marginRight: '400px',
          }}>
          Add to Order
        </button>
        <BottomButton />
      </BottomDiv>
    </>
  );
};

const TopDiv = styled.div`
  height: 330px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoDiv = styled.div`
  height: 230px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EndDiv = styled.div`
  height: 430px;
  width: 100%;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
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
  height: 520px;
  width: 100%;
  background-color: pink;
  display: flex;
`;

const SizesDiv = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsDiv  = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const SizesOptionsDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
`;

const OptionsCustomDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 52%;
  background-color: white;
  z-index: 999;
  transition: transform 0.3s ease-out;
  transform: ${({ showOverlay }) =>
    showOverlay ? 'translateX(0)' : 'translateX(100%)'};
`;

const CloseButton = styled.div`
  position: relative;
  margin: auto;
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-right: 50px;
  cursor: pointer;

  .leftright {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: #00754a;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
  }

  .rightleft {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: #00754a;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
  }

  .close {
    color: black;
    font-family: Helvetica, Arial, sans-serif; 
    font-size: .6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .3s ease-in;
    opacity: 0;
    margin: 50px 0 0px -2.5px;
    position: absolute;
  }

  &:hover .leftright {
    transform: rotate(-45deg);
    background-color: #1e3932;
  }

  &:hover .rightleft {
    transform: rotate(45deg);
    background-color: #1e3932;
  }

  &:hover .close {
    opacity: 1;
  }
`;

const DoneButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default Product;
