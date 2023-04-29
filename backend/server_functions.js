import { useState, useEffect } from 'react';


/* Fetch menu items from list to display in table */
function GetInventoryList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryInventory/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}

function GetProductsList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryProducts/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}

function GetCustomizationsList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryCustomizations/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}

function GetSalesList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/querySales/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}
function GetOrdersList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryOrders/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}
function GetEmployeesList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryEmployees/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}

function GetCustomersList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryCustomers/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}
function GetRecipesList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/queryRecipes/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}
function GetSizesList(start, end){
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {

      async function fetchInventoryItems() {
      // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
      const response = await fetch(`http://localhost:3001/querySizes/0/0`);

      const data = await response.json();
      setInventoryItems(data);
      console.log("queried")

    }
    console.log("useEffect")
    fetchInventoryItems();
  }, [start, end]);

  return inventoryItems;
}

// function AddtoInventory(info) {
//   const [inventoryItems, setInventoryItems] = useState([]);

//   useEffect(() => {

//       async function fetchInventoryItems() {
//       // const response = await fetch(`http://localhost:3001/queryInventory/${start}/${end}`);
//       const response = await fetch(`http://localhost:3001/querySizes/0/0`);

//       const data = await response.json();
//       setInventoryItems(data);
//       console.log("queried")

//     }
//     console.log("useEffect")
//     fetchInventoryItems();
//   }, [info]);

//   return inventoryItems;
// }

export {GetInventoryList, GetProductsList, GetCustomizationsList, GetSalesList, GetOrdersList, GetEmployeesList
  , GetCustomersList, GetRecipesList, GetSizesList
};
