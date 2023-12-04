import { Fragment } from "react";
import { useState } from "react";

function ListGroups() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  let msg = items.length === 0 && <p>No item found!</p>;
  // Hook (useState)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Fragment>
      <h2>List Groups</h2>
      {msg}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroups;
