import InternalCard from "./components/internalcard";
import ExtenalCard from "./components/externalcard";
import "./App.css";

const options = [{label:'User 1',
value:"user1"
}, {label:'User 2',value:"user2"}, {label:'User 3',value:"user3"}, {label:'User 4',value:"use4"}]

function YourModalContent(){
  return (
    <div style={
      {display:"flex", flexDirection:"column",gap:"32px", padding:"32px"}
    }>
      <label>
        User: 
        <br/>
        <select placeholder='Select User' name="users" id="users" form="carform" style={{width:"100%", padding:"8px", fontSize:"16px", backgroundColor:"white", color:"black", borderRadius:"4px"}}>
         {options.map((item)=>
          <option  value={item.value}>{item.label}</option>
          )}
        </select>
      </label>
      <label>
        User Category:
        <br/>
        <input type='text' placeholder='Select user category' style={{width:"100%",boxSizing:"border-box", padding:"8px", fontSize:"16px", backgroundColor:"white", color:"black", borderRadius:"4px"}}/>
      </label>
    </div>    
  )
}

function App() {

  return (
      <div
        style={{ 
    display: "grid",
    gridTemplateColumns : "1fr 1fr"

        }}
      className="">
        <div className="">
        <InternalCard/>
        </div>
        <div className="">
        <ExtenalCard/>
        </div>
      </div>
  );
}

export default App;
