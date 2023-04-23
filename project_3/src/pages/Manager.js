import React, { useState } from 'react';
import styled from 'styled-components';

const Manager = () => {
  const [activeTab, setActiveTab] = useState(0); // Define the active tab state

  const tabs = [
    { id: 0, name: 'Inventory', tableData: [ // Define the tabs and their table data
        { id: 1, name: 'John', age: 28, number: "346-530-4989"},
        { id: 2, name: 'Jane', age: 32, number: "346-530-4989" },
        { id: 3, name: 'Joe', age: 21, number: "346-530-4989" },
      ] },
    { id: 1, name: 'Transactions', tableData: [
        { id: 1, name: 'Bob', age: 45 },
        { id: 2, name: 'Alice', age: 36 },
        { id: 3, name: 'Mark', age: 29 },
      ] },
    { id: 2, name: 'Products', tableData: [
        { id: 1, name: 'Sam', age: 52 },
        { id: 2, name: 'Sara', age: 31 },
        { id: 3, name: 'Tom', age: 24 },
      ] },
    { id: 3, name: 'Customizations', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 4, name: 'Sales', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 5, name: 'Orders', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 6, name: 'Employees', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 7, name: 'Customers', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 8, name: 'Recipes', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 9, name: 'Sizes', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
    { id: 10, name: 'Reports', tableData: [
      { id: 1, name: 'Sam', age: 52 },
      { id: 2, name: 'Sara', age: 31 },
      { id: 3, name: 'Tom', age: 24 },
    ] },
  ];

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
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.age}</td>
                      <td>{data.number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#1e3932',
          height: '100px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></div>
  </div>)}

export default Manager;

