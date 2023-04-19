import React from 'react';
import styled from 'styled-components';

import Title from '../components/Title';

const Menu = (props) => (
  
  <div>
    <div style={{
      backgroundColor: '#1e3932',
      height: '100px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1,
      textAlign: 'center',
    }}>
      <img
        src={require('./logo.png')}
        alt="Logo"
        style={{ width: '5%', position: 'absolute', top: '10px', right: '10px' }}
      />
      <Title style={{ color: 'white' }}>Menu</Title>
    </div>
    <div style={{ marginTop: '100px', marginBottom: '100px', padding: '30px' }}>
      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Hot and Iced Espresso Beverages</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_1.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Americano</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_2.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cafe Latte</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_3.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_4.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Caramel Macchiato</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_5.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Mocha</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_6.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>White Mocha</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_7.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Black and White Mocha	</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_8.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Caramel Mocha</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_9.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Coconut Mocha</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_10.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Espresso</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_11.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Espresso Macchiato</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_12.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Espresso Con Panna</h3>
          </a>
        </div>
        
      </div>
      <h4 style={{ textAlign: 'center', fontSize: 35 }}>Brewed Coffee</h4>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_13.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Brewed Coffee</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_14.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cafe Au Lait</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_15.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Red Eye</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_16.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Black</h3>
          </a>
        </div>
        
        
      </div>




      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Hot Beverage</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_17.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Hot Chocolate</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_18.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>White Hot Chocolate</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_19.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Black and White Chocolate</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_20.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Green Tea Latte</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_21.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Chai Latte</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_22.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Brewed Tea Latte</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_23.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Hot Brewed Tea</h3>
          </a>
        </div>
        
      </div>






      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Iced Tea</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_24.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Iced Black Tea</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_25.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Iced Green Tea</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_26.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Iced Passion Tea</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_27.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Green Tea Lemonade</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_28.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Passion Tea Lemonade</h3>
          </a>
        </div>
      </div>



      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Iced Coffee</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_29.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Iced Coffee</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_30.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Iced Cafe Con Leche</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_31.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cold Brewed Iced Coffee</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_32.png')} alt="Cappuccino" style={{ width: '58%' }} />
          <h3 style={{ textAlign: 'center' }}>Cold Brewed Iced Coffee with Milk</h3>
          </a>
        </div>
      </div>






      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Coffee Based Frapuccinos</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_33.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Coffee Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_34.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Espresso Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_35.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Caramel Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_36.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Mocha Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_37.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Java Chip Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_38.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Cafe Vanilla Frappuccino</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_39.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>White Mocha Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_40.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Syrup Frappuccino</h3>
          </a>
        </div>
      </div>






      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Creme Frappuccino</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_41.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Vanilla Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_42.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Strawberries and Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_43.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Double Choclate Chip Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_44.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Syrup Creme Frappuccino</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_45.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Blended Strawberry Frappuccino</h3>
          </a>
        </div>
      </div>



      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Smoothie</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_46.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Mango Smoothie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_47.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Pomegranate Smoothie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_48.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Blueberry Smoothie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_49.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Green Tea Smoothie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_50.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Blueberry Green Tea Smoothie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_51.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Pomegranate Green Tea Smoothie</h3>
          </a>
        </div>
      </div>





      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Beverages</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_52.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Silk Almond Milk Vanilla</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_53.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Silk Almond Milk Chocolate</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_54.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Aquafina Water</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_55.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Liquid IV Hydration Multiplier</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_56.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Teavana Hibiscus Spice</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_57.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Teavana Classic Chai</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_58.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Teavana Jasmine Citrus</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_59.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Teavana Chamomile Blush</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_60.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Teavana Radiant Green</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_61.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Teavana Modern Earl Grey</h3>
          </a>
        </div>
      </div>




      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Food</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_62.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Flat Cheese Pizza</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_63.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Deep Dish Pepperoni Pizza</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_64.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Peanut Butter Perfect Bar</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_65.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Sargento Balanced Breaks</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_66.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>P3 Snack</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_67.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Dippin Sticks Sliced Apples</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_68.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Italian Sub</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_69.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Cream Cheese</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_70.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Sargento Colby Jack Cheese</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_71.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Babybel Cheese Balls</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_72.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Blueberry Muffin</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_73.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Chocolate Tuxedo Muffin</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_74.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Banana Nut Muffin</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_75.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Glazed Donut</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_76.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Butter Croissant</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_77.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Gluten Free Brownie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_78.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Chocolate Chip Cookie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_79.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Chewy Marshmallow</h3>
          </a>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_80.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Salted Caramel Cookie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_81.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Toffee Crunch Brownie</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_82.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Kind Bar (Caramel)</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_83.png')} alt="Cafe Latte" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Belvita Blueberry Breakfast Biscuits</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 1px' }}>
        <a href="/products">
          <img src={require('./server/product_84.png')} alt="Americano" style={{ width: '47%' }} />
          <h3 style={{ textAlign: 'center' }}>Altoids (Peppermint)</h3>
          </a>
        </div>
      </div>


      <h2 style={{ textAlign: 'center', fontSize: 35 }}>Items</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_85.png')} alt="Americano" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Koffie Straw</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_86.png')} alt="Cafe Latte" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Starbucks Mug</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_87.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Starbucks Cup</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_88.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>Starbucks Tumbler</h3>
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 30px' }}>
        <a href="/products">
          <img src={require('./server/product_89.png')} alt="Cappuccino" style={{ width: '75%' }} />
          <h3 style={{ textAlign: 'center' }}>A&M Coffee Cup</h3>
          </a>
        </div>
      </div>


    </div>
    
    <div style={{
      backgroundColor: '#1e3932',
      height: '50px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      textAlign: 'center',
    }}>
    </div>
  </div>
);
document.addEventListener("DOMContentLoaded", function() {
  // Set the scrolling interval in milliseconds
  const SCROLL_INTERVAL = 5000;

  // Set the scrolling distance in pixels
  const SCROLL_DISTANCE = 300;

  // Get the page height
  const pageHeight = document.body.scrollHeight;

  // Initialize the current scroll position
  let currentScrollPosition = 0;

  // Define the scrolling function
  function scrollPage() {
    // Scroll to the next position
    currentScrollPosition += SCROLL_DISTANCE;
    if (currentScrollPosition >= pageHeight) {
      currentScrollPosition = 0;
    }
    window.scrollTo({
      top: currentScrollPosition,
      behavior: 'smooth'
    });
  }

  // Start the scrolling interval
  setInterval(scrollPage, SCROLL_INTERVAL);
});

export default styled(Menu)`

`;
