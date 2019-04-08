import React, { Component } from 'react'

import Summary, { data as dataSummary } from './Summary';

export const data = [
  {
    "name": "Baked Salmon", "ingredients": [{ "name": "Salmon", "amount": 1, "measurement": "l lb" }, { "name": "Pine Nuts", "amount": 1, "measurement": "cup" }, { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" }, { "name": "Yellow Squash", "amount": 1, "measurement": "med" }, { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" }, { "name": "Garlic", "amount": 3, "measurement": "cloves" }], "steps": ["Preheat the oven to 350 degrees.", "Spread the olive oil around a glass baking dish.", "Add the salmon, garlic, and pine nuts to the dish.", "Bake for 15 minutes.", "Add the yellow squash and put back in the oven for 30 mins.", "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."]
  },
  { "name": "Fish Tacos", "ingredients": [{ "name": "Whitefish", "amount": 1, "measurement": "l lb" }, { "name": "Cheese", "amount": 1, "measurement": "cup" }, { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" }, { "name": "Tomatoes", "amount": 2, "measurement": "large" }, { "name": "Tortillas", "amount": 3, "measurement": "med" }], "steps": ["Cook the fish on the grill until hot.", "Place the fish on the 3 tortillas.", "Top them with lettuce, tomatoes, and cheese."] }
];

export const Instruction = ({ title, steps }) => (
  <section className='instructions'>
    <h2>{title}</h2>
    {
      steps.map((ste, i) =>
        <p key={i}>{ste}</p>
      )
    }
  </section>
);

export const Ingredient = ({ name, amount, measurement }) => (
  <li>
    <span className='amount'>{amount}</span>
    <span className='measurement'>{measurement}</span>
    <span className='name'>{name}</span>
  </li>
);

export const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <Summary title={name} ingredients={ingredients.length} steps={steps.length} />
    <ul className='ingredients'>
      {
        ingredients.map((ing, i) => <Ingredient key={i} {...ing} />)
      }
    </ul>
    <Instruction title='Cooking instructions' steps={steps} />
  </section>
);

const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className='recipes'>
      {
        recipes.map((rec, i) => (
          <Recipe key={i} {...rec} />
        ))
      }
    </div>
  </article>
);

export default Menu;
