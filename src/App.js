import React, { useState } from "react";

// css
import "./styles/index.css";

// list data
// import { listData } from "./data";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("savedList")));
  const [newItem, setNewItem] = useState("");

  const setAndSaveList = (addList) => {
    setList(addList);
    localStorage.setItem("savedList", JSON.stringify(addList));
  };

  const hundleCheck = (id) => {
    const toggleCheck = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setAndSaveList(toggleCheck);
  };

  const hundleRemoveItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setAndSaveList(newList);
  };

  const hundleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) {
      return;
    }
    const id = list ? list.length + 1 : 1;
    const title = newItem;
    const addNewItem = { id, title, checked: false };
    setAndSaveList(list ? [...list, addNewItem] : [addNewItem]);
    setNewItem("");
  };
  return (
    <>
      <Header />
      <AddItem hundleSubmit={hundleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <MainContent list={list} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} />
      <Footer listCount={list ? list.length : 0} />
    </>
  );
}

export default App;
