import React, { useState } from "react";

// css
import "./styles/index.css";

// list data
import { listData } from "./data";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [list, setList] = useState(listData);

  const hundleCheck = (id) => {
    const toggleCheck = list.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
    setList(toggleCheck);
  };

  const hundleRemoveItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <>
      <Header />
      <MainContent list={list} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} />
      <Footer listCount={list.length} />
    </>
  );
}

export default App;
