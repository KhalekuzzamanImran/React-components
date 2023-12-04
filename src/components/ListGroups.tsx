import { Fragment } from "react";

function ListGroups() {
  const items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <Fragment>
      <h2>List Groups</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroups;
