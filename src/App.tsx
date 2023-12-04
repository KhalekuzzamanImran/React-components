import ListGroups from "./components/ListGroups";
import Message from "./components/Message";
import { Alert } from "./components/Alert";

function App() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <>
        <Message />
        <ListGroups
          items={items}
          heading="Cities"
          onSelectedItem={handleSelectedItem}
        />
        <Alert />
      </>
    </div>
  );
}

export default App;
