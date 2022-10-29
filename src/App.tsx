import Card from "./components/card";
import Keyboard from "./components/404/keyboard";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <div className="flex gap-2 justify-evenly flex-wrap mt-2 ">
        <Card title="keyboard">
          <Keyboard />
        </Card>
      </div>
    </>
  );
}

export default App;
