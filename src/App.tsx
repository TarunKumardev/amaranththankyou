import InternalCard from "./components/internalcard";
import ExtenalCard from "./components/externalcard";
import "./App.css";

function App() {

  return (
      <div
        style={{ 
    display: "grid",
    gridTemplateColumns : "1fr 1fr"
        }}
      >
        <div >
        <InternalCard/>
        </div>
        <div >
        <ExtenalCard/>
        </div>
      </div>
  );
}

export default App;
