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
      zIndex: 100,
      textAlign: 'center',
    }}>
      <img
        src={require('./logo.png')}
        alt="Logo"
        style={{ height: '80%', marginRight: '10px', marginTop: '10px' }}
      />
      <Title style={{ color: 'white' }}>Menu</Title>
    </div>
    <div style={{ marginTop: '100px', marginBottom: '100px', padding: '30px' }}>
    <h1>Americano</h1>
    <img src={require('./server/product_1.png')} alt="Logo" style={{ width: '5%' }} />

    <h1>Cafe Latte</h1>
    <img src={require('./server/product_2.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Cappuccino</h1>
    <img src={require('./server/product_3.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Caramel Macchiato</h1>
    <img src={require('./server/product_4.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Mocha</h1>
    <img src={require('./server/product_5.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>White Mocha</h1>
    <img src={require('./server/product_6.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Black and White Mocha</h1>
    <img src={require('./server/product_7.jpg')} alt="Logo" style={{ width: '5%' }} />
    <h1>Caramel Mocha</h1>
    <img src={require('./server/product_8.jpg')} alt="Logo" style={{ width: '5%' }} />
    <h1>Coconut Mocha</h1>
    <img src={require('./server/product_9.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Espresso</h1>
    <img src={require('./server/product_10.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Espresso Macchiato</h1>
    <img src={require('./server/product_11.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Espresso Con Panna</h1>
    <img src={require('./server/product_12.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Brewed Coffee</h1>
    <img src={require('./server/product_13.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Cafe Au Lait</h1>
    <img src={require('./server/product_14.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Red Eye</h1>
    <img src={require('./server/product_15.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Black</h1>
    <img src={require('./server/product_16.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Hot Chocolate</h1>
    <img src={require('./server/product_17.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>White Hot Chocolate</h1>
    <img src={require('./server/product_18.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Black and White Chocolate</h1>
    <img src={require('./server/product_19.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Green Tea Latte</h1>
    <img src={require('./server/product_20.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Chai Latte</h1>
    <img src={require('./server/product_21.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Brewed Tea Latte</h1>
    <img src={require('./server/product_22.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Hot Brewed Tea</h1>
    <img src={require('./server/product_23.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Iced Black Tea</h1>
    <img src={require('./server/product_24.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Iced Green Tea</h1>
    <img src={require('./server/product_25.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Iced Passion Tea</h1>
    <img src={require('./server/product_26.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Green Tea Lemonade</h1>
    <img src={require('./server/product_27.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Passion Tea Lemonade</h1>
    <img src={require('./server/product_28.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Iced Coffee</h1>
    <img src={require('./server/product_29.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Iced Cafe Con Leche</h1>
    <img src={require('./server/product_30.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Cold Brewed Iced Coffee</h1>
    <img src={require('./server/product_31.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Cold Brewed Iced Coffee with Milk</h1>
    <img src={require('./server/product_32.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Coffee Frappuccino</h1>
    <img src={require('./server/product_33.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Espresso Frappuccino</h1>
    <img src={require('./server/product_34.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Caramel Frappuccino</h1>
    <img src={require('./server/product_35.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Mocha Frappuccino</h1>
    <img src={require('./server/product_36.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Java Chip Frappuccino</h1>
    <img src={require('./server/product_37.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Cafe Vanilla Frappuccino</h1>
    <img src={require('./server/product_38.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>White Mocha Frappuccino</h1>
    <img src={require('./server/product_39.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Syrup Frappuccino</h1>
    <img src={require('./server/product_40.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Vanilla Frappuccino</h1>
    <img src={require('./server/product_41.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Strawberries and Frappuccino</h1>
    <img src={require('./server/product_42.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Double Choclate Chip Frappuccino</h1>
    <img src={require('./server/product_43.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Syrup Creme Frappuccino</h1>
    <img src={require('./server/product_44.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Blended Strawberry Frappuccino</h1>
    <img src={require('./server/product_45.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Mango Smoothie</h1>
    <img src={require('./server/product_46.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Pomegranate Smoothie</h1>
    <img src={require('./server/product_47.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Blueberry Smoothie</h1>
    <img src={require('./server/product_48.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Green Tea Smoothie</h1>
    <img src={require('./server/product_49.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Blueberry Green Tea Smoothie</h1>
    <img src={require('./server/product_50.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Pomegranate Green Tea Smoothie</h1>
    <img src={require('./server/product_51.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Silk Almond Milk Vanilla</h1>
    <img src={require('./server/product_52.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Silk Almond Milk Chocolate</h1>
    <img src={require('./server/product_53.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Aquafina Water</h1>
    <img src={require('./server/product_54.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Liquid IV Hydration Multiplier</h1>
    <img src={require('./server/product_55.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Teavana Hibiscus Spice</h1>
    <img src={require('./server/product_56.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Teavana Classic Chai</h1>
    <img src={require('./server/product_57.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Teavana Jasmine Citrus</h1>
    <img src={require('./server/product_58.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Teavana Chamomile Blush</h1>
    <img src={require('./server/product_59.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Teavana Radiant Green</h1>
    <img src={require('./server/product_60.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Teavana Modern Earl Grey</h1>
    <img src={require('./server/product_61.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Flat Cheese Pizza</h1>
    <img src={require('./server/product_62.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Deep Dish Pepperoni Pizza</h1>
    <img src={require('./server/product_63.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Peanut Butter Perfect Bar</h1>
    <img src={require('./server/product_64.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Sargento Balanced Breaks</h1>
    <img src={require('./server/product_65.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>P3 Snack</h1>
    <img src={require('./server/product_66.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Dippin Sticks Sliced Apples</h1>
    <img src={require('./server/product_67.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Italian Sub</h1>
    <img src={require('./server/product_68.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Cream Cheese</h1>
    <img src={require('./server/product_69.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Sargento Colby Jack Cheese</h1>
    <img src={require('./server/product_70.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Babybel Cheese Balls</h1>
    <img src={require('./server/product_71.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Blueberry Muffin</h1>
    <img src={require('./server/product_72.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Chocolate Tuxedo Muffin</h1>
    <img src={require('./server/product_73.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Banana Nut Muffin</h1>
    <img src={require('./server/product_74.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Glazed Donut</h1>
    <img src={require('./server/product_75.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Butter Croissant</h1>
    <img src={require('./server/product_76.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Gluten Free Brownie</h1>
    <img src={require('./server/product_77.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Chocolate Chip Cookie</h1>
    <img src={require('./server/product_78.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Chewy Marshmallow</h1>
    <img src={require('./server/product_79.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Salted Caramel Cookie</h1>
    <img src={require('./server/product_80.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Toffee Crunch Brownie</h1>
    <img src={require('./server/product_81.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Kind Bar (Caramel)</h1>
    <img src={require('./server/product_82.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Belvita Blueberry Breakfast Biscuits</h1>
    <img src={require('./server/product_83.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Altoids (Peppermint)</h1>
    <img src={require('./server/product_84.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Koffie Straw</h1>
    <img src={require('./server/product_85.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Starbucks Mug</h1>
    <img src={require('./server/product_86.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Starbucks Cup</h1>
    <img src={require('./server/product_87.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>Starbucks Tumbler</h1>
    <img src={require('./server/product_88.png')} alt="Logo" style={{ width: '5%' }} />
    <h1>A&M Coffee Cup</h1>
    <img src={require('./server/product_89.png')} alt="Logo" style={{ width: '5%' }} />
    </div>
    <div style={{
      backgroundColor: '#1e3932',
      height: '100px',
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

export default styled(Menu)`

`;

