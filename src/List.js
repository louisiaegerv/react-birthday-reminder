import React from "react";

const List = ({ people, handleClick }) => {
  return (
    <>
      {people.map((person) => {
        const { name, age, id, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <button className="btn delete" onClick={() => handleClick(id)}>
              X
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
