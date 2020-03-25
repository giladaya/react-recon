import React from "react";

function ListItem({ text, id, onCheck }) {
  console.log("Render ListItem", id);

  // React.useEffect(() => {
  //   console.log("Mount ListItem", id);
  //   return function cleanup() {
  //     console.log("Unmount ListItem", id);
  //   };
  // }, [id]);

  return (
    <li>
      {text} <button onClick={onCheck}>Clear</button>
    </li>
  );
}

export default ListItem;
