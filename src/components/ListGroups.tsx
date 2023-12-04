import { Fragment } from "react";

function ListGroups() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];
  let msg = items.length === 0 ? <p>No item found!</p> : null;
  return (
    <Fragment>
      <h2>List Groups</h2>
      {msg}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroups;
