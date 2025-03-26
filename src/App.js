import React, { useState, useEffect } from "react";

// css
import "./styles/index.css";

// list data
// import { listData } from "./data";

import apiRequest from "./functions/apiRequest";

// TODO: add the search feature

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const API_URL = "http://localhost:5500/items";
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const errorMessageStyle = { margin: "25% auto", color: "red", fontWeight: "bold" };
  const loadingStyle = { margin: "25% auto", fontWeight: "bold" };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("An error occured please try again.");
        }
        const data = await response.json();
        setList(data);
      } catch (error) {
        console.log(error.message);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(!isLoading);
      }
    };

    setTimeout(() => getData(), 2000);
  }, []);

  const hundleCheck = async (id) => {
    const toggleCheck = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setList(toggleCheck);

    const addItem = toggleCheck.filter((item) => item.id === id);
    const updateCheckHeaders = {
      method: "PATCH",
      headers: {
        "Content-Type": "application / json",
      },
      body: JSON.stringify(addItem[0]),
    };
    const updateCheckURL = `${API_URL}/${id}`;
    const response = await apiRequest(updateCheckURL, updateCheckHeaders);

    if (response) setErrorMessage(response);
  };

  const hundleRemoveItem = async (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);

    const removeItemHeaders = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const removeItemURL = `${API_URL}/${id}`;
    const response = await apiRequest(removeItemURL, removeItemHeaders);

    if (response) setErrorMessage(response);
  };

  const hundleSubmit = async (e) => {
    e.preventDefault();
    if (!newItem.trim()) {
      return;
    }
    const id = list ? (list.length + 1).toString() : "1";
    const title = newItem;
    const addNewItem = { id, title, checked: false };
    setList([...list, addNewItem]);
    setNewItem("");

    const postHeaders = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewItem),
    };

    const request = await apiRequest(API_URL, postHeaders);

    if (request) setErrorMessage(request);
  };
  return (
    <>
      <Header />
      <AddItem hundleSubmit={hundleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <main>
        {errorMessage && <p style={errorMessageStyle}>Error: {errorMessage}</p>}
        {isLoading && <p style={loadingStyle}>Loading List Items...</p>}
        {!isLoading && !errorMessage && <MainContent list={list} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} />}
      </main>
      <Footer listCount={list.length} />
    </>
  );
}

export default App;
