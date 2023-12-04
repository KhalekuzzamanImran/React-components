import { Fragment } from "react";

function ListGroups() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  let msg = items.length === 0 && <p>No item found!</p>;
  return (
    <Fragment>
      <h2>List Groups</h2>
      {msg}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroups;
