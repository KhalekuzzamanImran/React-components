import ListGroups from "./components/ListGroups";
import Message from "./components/Message";

function App() {
  let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <>
        <Message />
        <ListGroups items={items} heading="Cities" />
      </>
    </div>
  );
}

export default App;
