import React, { useState } from 'react';
import styled from 'styled-components';
import {GetInventoryList, GetProductsList, GetCustomizationsList, GetSalesList, GetOrdersList, GetEmployeesList
  , GetCustomersList, GetRecipesList, GetSizesList, AddItemButton} from '../backend/server_functions';

const Manager = () => {
  const [activeTab, setActiveTab] = useState(0); // Define the active tab state
  const [showForm, setShowForm] = useState(false);


  const inventoryData = GetInventoryList(0,0);
  const productData = GetProductsList(0,0);
  const customizationsData = GetCustomizationsList(0,0);
  const salesData = GetSalesList(0,0);
  const ordersData = GetOrdersList(0,0);
  const employeeData = GetEmployeesList(0,0);
  const customerData = GetCustomersList(0,0);
  const recipeData = GetRecipesList(0,0);
  const sizeData = GetSizesList(0,0);

  //fill in data for everything except transactions
  // edit function for inventory, products, employees, customers, recipes
  // x y z tables for the report
  const title = [
    { id: 0, name: 'Inventory', tableData: []
    },
    { id: 1, name: 'Transactions', tableData: [] },
    { id: 2, name: 'Products', tableData: [] },
    { id: 3, name: 'Customizations', tableData: [] },
    { id: 4, name: 'Sales', tableData: [] },
    { id: 5, name: 'Orders', tableData: [] },
    { id: 6, name: 'Employees', tableData: [] },
    { id: 7, name: 'Customers', tableData: [] },
    { id: 8, name: 'Recipes', tableData: [] },
    { id: 9, name: 'Sizes', tableData: [] },
    { id: 10, name: 'Reports', tableData: [] },
  ];
  const tabs = [
    { id: 0, name: 'Inventory', tableData: inventoryData },
    { id: 1, name: 'Transactions', tableData: []},
    { id: 2, name: 'Products', tableData: productData },
    { id: 3, name: 'Customizations', tableData: customizationsData },
    { id: 4, name: 'Sales', tableData: salesData },
    { id: 5, name: 'Orders', tableData: ordersData },
    { id: 6, name: 'Employees', tableData: employeeData },
    { id: 7, name: 'Customers', tableData: customerData },
    { id: 8, name: 'Recipes', tableData: recipeData },
    { id: 9, name: 'Sizes', tableData: sizeData },
    { id: 10, name: 'Reports', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
  ];

  function handleSubmit(event) {
    setShowForm(!showForm);
    event.preventDefault();
    // Here, you can send the form data to your Postgres database
    // using a fetch request or another method
    console.log("handleSubmitCunt")
  }

  const handleClick = () => {
    console.log("formcunt")
    setShowForm(!showForm);
  }
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex); // Update the active tab state when a tab is clicked
  };
  

  return (
      
    <div>
      <div
        style={{
          backgroundColor: '#1e3932',
          height: '100px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex:-1,
        }}
      >
      <img src={require('./logo.png')} alt="Logo" style={{ width: '5%' }} />
      </div>
      <div style={{ marginTop: '150px', marginLeft: '300px'}}>
        <div style={{ display: 'flex' }}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              style={{
                backgroundColor: activeTab === tab.id ? '#1e3932' : '#00754a',
                color: 'white',
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              {tab.name}
            </div>
          ))}
        </div>
        <div>
          {tabs.map((tab) => (
            <div key={tab.id} style={{ display: activeTab === tab.id ? 'block' : 'none' }}>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  {tab.tableData.map((data) => (
                      <tr key={data.id}>
                          {Object.keys(data).map((key) => (
                              <td key={key}>{data[key]}</td>
                          ))}
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <div
        // style={{
        //   backgroundColor: '#1e3932',
        //   height: '100px',
        //   position: 'fixed',
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        // }}
      >
      </div>

      <div>
        {/* <button onClick={handleClick}>Toggle Interface</button> */}
        {showForm ? (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id" />

              <label htmlFor="itemName">Item Name:</label>
              <input type="text" id="itemName" name="itemName" />

              <label htmlFor="itemType">Item Type:</label>
              <input type="text" id="itemType" name="itemType" />

              <label htmlFor="itemQuantity">Item Quantity:</label>
              <input type="text" id="itemQuantity" name="itemQuantity" />

              <label htmlFor="itemUnit">Item Unit:</label>
              <input type="text" id="itemUnit" name="itemUnit" />

              <label htmlFor="itemPrice">Item Price:</label>
              <input type="text" id="itemPrice" name="itemPrice" />

              <label htmlFor="dateOfLastUpdate">Date of Last Update:</label>
              <input type="text" id="dateOfLastUpdate" name="dateOfLastUpdate" />

              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          <div>
              <button onClick={handleClick}>Add Item</button>
          </div>
        )}
    </div>
    </div>
    
    )
    
  }

export default Manager;

