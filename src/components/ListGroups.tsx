import { Fragment } from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroups({ items, heading, onSelectedItem }: Props) {
  let msg = items.length === 0 && <p>No item found!</p>;
  // Hook (useState)
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Fragment>
      <h2>{heading}</h2>
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroups;
