import React, { useState } from "react";

import data from "./data";

import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <main>
      <section className="container">
        <h3>There are {people.length} birthdays today</h3>
        <List people={people} handleClick={handleClick} />
        <button className="btn" onClick={() => setPeople([])}>
          Remove All
        </button>
      </section>
    </main>
  );
};

export default App;
