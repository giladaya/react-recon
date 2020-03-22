import React from "react";

function ListItem({ text, id, onCheck }) {
  console.log("Render ListItem", id);

  return (
    <li>
      {text} <button onClick={onCheck}>Clear</button>
    </li>
  );
}

export default ListItem;
