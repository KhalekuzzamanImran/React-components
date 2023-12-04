import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroups() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  let msg = items.length === 0 && <p>No item found!</p>;
  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h2>List Groups</h2>
      {msg}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroups;
