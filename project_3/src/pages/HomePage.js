import React from 'react'
import styled from 'styled-components'

import Title from '../components/Title'

const BottomButton = () => {
  return (
    <Button >
      <ButtonImg src={require('../images/bag.jpg')} />
    </Button>
  );
};

const HomePage = props => {
  
  return (
    <>
    <ContentDiv>
      <div style={{display: 'flex', width: '1290px', height: '500px', backgroundColor: '#a0c292', margin: '30px auto'}}>
        
        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: '#1e3e39', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '36px', textIndent: '40px'}}> Cups of <br />Appreciation </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#1f3e39', marginTop: '30px', fontSize: '20px'}}> Share the love. Express your thanks with a well-deserved coffee.</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#a0c292',
            color: '#1e3e39',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#8ba680';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#a0c292';
          }}
          >
          Order now 
        </button >
        </div >
        <video width="500px" height="500px" controls muted autoPlay playsinline loop src= {require('../images/video.MP4')}> </video>
      </div>
      <div style={{display: 'flex', width: '1290px', height: '220px', backgroundColor: '#d4e9e2', margin: '30px auto'}}>

        <img src={require('../images/mobileOrder.png')} style={{ width: '600px', height: '220px'}}/>

        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: 'black', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '22px'}}> Spring in your step, Coffee in your Cup </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: 'black', marginTop: '30px', fontSize: '16px'}}> Shake up your usual and order your favorite drink now!. </text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#d4e9e2',
            color: 'black',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            borderColor: 'black',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#b3c1bc';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#d4e9e2';
          }}
          >
          Order now 
        </button >
        </div >
      </div>
      <div style={{display: 'flex', width: '1290px', height: '500px', backgroundColor: '#f6bed9', margin: '30px auto'}}>
        
        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: '#1e3e39', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '36px'}}> Hot & Cold. Your way</text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#1f3e39', marginTop: '30px', fontSize: '20px'}}> Coffee made with love for all the seasons.</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#f6bed9',
            color: '#1e3e39',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#c595ac';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#f6bed9';
          }}
          >
          Order now 
        </button >
        </div >
        <video width="500px" height="500px" controls muted autoPlay playsinline loop src= {require('../images/video2.MP4')}> </video>
      </div>
      <div style={{display: 'flex', width: '1290px', height: '500px', backgroundColor: '#fff4d4', margin: '30px auto'}}>

        <img src={require('../images/butter.jpg')} style={{ width: '600px', height: '500px'}}/>

        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: '#1e3932', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '36px'}}> Just-right choice </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: '#1e3932', marginTop: '30px', fontSize: '16px'}}> You can't go wrong with a classic!</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#fff4d4',
            color: '#1e3932',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            borderColor: 'black',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#dcd3b8';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#fff4d4';
          }}
          >
          Order now 
        </button >
        </div >
      </div>

      <div style={{display: 'flex', width: '1290px', height: '350px', backgroundColor: '#1e3932', margin: '30px auto'}}>

        <div style={{display: 'flex', flexFlow: 'column', width: '1000px', justifyContent: 'center', alignItems: 'center'}} >
          <text style={{display: 'flex', color: 'white', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '36px'}}> Delivery delight </text>
          <text style={{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', color: 'white', marginTop: '30px', fontSize: '20px'}}> Brighten your day by getting your favorite order on Uber Eats.</text>
          <button style={{
            marginTop: '30px',
            borderColor: 'black',
            background: '#1e3932',
            color: 'white',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            borderWidth: '1px',
            borderColor: 'white',
            padding: '10px 20px',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#162823';
          }}
          onMouseOut={(e) => {
            e.target.style.background = '#1e3932';
          }}
          >
          Order now 
        </button >
        </div >
        <img src={require('../images/UberEats.png')} style={{ width: '600px', height: '350px'}}/>
      </div>
    </ContentDiv>
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
          Order Now
        </button>
        <BottomButton />
      </BottomDiv>
    </>
  );
};

const ContentDiv = styled.div`


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

export default HomePage;