import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Data from "./Data";
function App() {
  const cardData = Data.map((item) => {
    return <Contents key={item.key} item={item} />;
  });
  return (
    <div>
      <Navbar />
      {cardData}
    </div>
  );
}

export default App;

