import React from "react";
import ListItem from "./ListItem";

function List({ todos, onCheck }) {
  console.log('Render List');

  // const Component = todos.length % 2 === 0 ? 'ol' : 'ul';
  const Component = 'ul';

  return (
    <Component className="list">
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          text={todo.text}
          id={todo.id}
          onCheck={() => onCheck(todo.id)}
        />
      ))}
    </Component>
  );
}

export default List;