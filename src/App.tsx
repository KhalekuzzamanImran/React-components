import ListGroups from "./components/ListGroups";
import Message from "./components/Message";

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
      </>
    </div>
  );
}

export default App;
