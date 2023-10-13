import PuppyImage from "./PuppyImage";
import ColourCounter from "./ColourCounter";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <h1>T-Levels Key Assessment 1</h1>

      <h2>Task 1</h2>
      <div className="component">
        <PuppyImage />
      </div>

      <h2>Task 2</h2>
      <div className="component">
        <ColourCounter />
      </div>

      <h2>Task 3</h2>
      <div className="component">
        <ToDoList title="Shopping List" items={["Milk", "Cheese", "Bread"]} />
      </div>
      <div className="component">
        <ToDoList
          title="Chore List"
          items={["Vacuum", "Wash Dishes", "Laundry"]}
        />
      </div>
    </>
  );
}

export default App;
