import React from 'react';

function SinglePizza({ pizza }) {}

export default function PizzaList({ pizzas }) {
  return (
    <div>
      {pizzas.map((pizza) => (
        <p>{pizza.name}</p>
      ))}
    </div>
  );
}
