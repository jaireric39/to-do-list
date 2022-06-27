import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li>{props.text} 
      {props.showButton && <button className="delButton" style={{alignSelf: 'flex-end'}} onClick={() => {
        props.onChecked(props.id);
      }}>X</button>}  
      </li>
      
    </div>
  );
}

export default ToDoItem;
