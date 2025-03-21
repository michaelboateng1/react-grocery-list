import React, { useState, useEffect } from "react";

// css
import "./styles/index.css";

// list data
// import { listData } from "./data";

// TODO: add the search feature

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("savedList")) || []);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  const hundleCheck = (id) => {
    const toggleCheck = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setList(toggleCheck);
  };

  const hundleRemoveItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) {
      return;
    }
    const id = list ? list.length + 1 : 1;
    const title = newItem;
    const addNewItem = { id, title, checked: false };
    setList([...list, addNewItem]);
    setNewItem("");
  };
  return (
    <>
      <Header />
      <AddItem hundleSubmit={hundleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <MainContent list={list} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} />
      <Footer listCount={list.length} />
    </>
  );
}

export default App;
