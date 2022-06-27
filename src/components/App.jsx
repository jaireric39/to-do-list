import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    
    setFinishedItems((prevItems) => {
      return [...prevItems, items[id]];
      });
    console.log(finishedItems);

    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        console.log(prevItems);
        return index !== id;
      });
    });


  }

  return (
    <div className="container">
      <div class='row'>
        <div class='column'>
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea onAdd={addItem} />
          <div>
            <ul>
              {items.map((todoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
                  showButton={true}
                  onChecked={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
        <div class='column'>
          <div className="heading">
            <h1>Completed List</h1>
          </div>
          <div>
            <ul>
              {finishedItems.map((todoItem, index) => (
                <ToDoItem
                  key={index}
                  id={index}
                  text={todoItem}
                  showButton={false}
                  onChecked={deleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
