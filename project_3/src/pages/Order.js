import React from "react";
import '../style.css'

function Order(props) {
    

    return (
        <div style= {{display: 'flex', height: "100vh", marginTop: '-101px'}}>
            <div style= {{backgroundColor: '#1e3932', width: '40%'}}>
                <div style= {{width: '50%', height: '100px', marginLeft: '50px', marginTop: '40px', display: 'flex', alignItems: 'center'}}>
                    <img src={require('../images/logo.png')} style={{ width: '80px', height: '80px', marginRight: '10px' }} />
                    <a href="/menu" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight: 'bold', fontSize: '20px'}}> &lt;  Back to menu</a>
                </div>
                <div style= {{display: 'flex', flexFlow:'column', alignItems: 'center', marginTop: '100px'}}>
                    <img src={require('../images/OrderGif.gif')} style={{ width: '350px', height: '350px', marginRight: '10px', borderRadius: '20%' }} />
                    <text style= {{marginTop: '20px', color: 'white', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif',fontWeight: 'bold',fontSize: '34px'}} >Enjoy!</text>
                </div>
                
            </div>
            <div style= {{backgroundColor: 'white', width: '60%', position: 'relative'}}>
                <div style= {{backgroundColor: '', width: '100%', height: '100px',display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '3px solid #ccc', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)'}}>
                    <text style={{color: 'black', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif',fontWeight: 'bold',fontSize: '40px' }} >Order</text>
                </div>
                <div style= {{backgroundColor: 'white', width: '100%', height: '600px', borderBottom: '3px solid #ccc', boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)'}}>
                
                </div>
                <div style= {{backgroundColor: 'white', width: '100%', height: '180px', marginTop:'20px'}}>
                <div style={{ textAlign: 'right', marginRight: '80px' }}>
                    <text style={{fontSize: '30px', fontWeight: 'bold'}}>Total:</text>
                    <text style={{marginLeft: '40px', fontSize: '30px'}}>20.10</text>
                </div>
                </div>
                <button 
                    style={{ 
                        border: 'none', 
                        background: '#00754a',
                        color: 'white',
                        cursor: 'pointer', 
                        fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
                        fontWeight: 'bold', 
                        fontSize: '22px',
                        borderRadius: '50px',
                        padding: '10px 20px',
                        position: 'absolute',
                        bottom: '30px',
                        right: '25px',
                        height: '60px',
                        width: '140px'
                    }}>
                    Order
                </button>
            </div>
        </div>
    )
}

export default Order