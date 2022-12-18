import { useState } from "react";
import EntryList from "./Components/EntryList/EntryList";
import EntryForm from "./Components/NewEntry/EntryForm";
import Model from "./Components/UI/Model";

const list = [
  { id: 1, name: "Anmol", age: 21 },
  { id: 2, name: "Saloni", age: 31 },
];



function App() {
  
  const [displayList, setDisplayList] = useState(list);

  function addEntry(newEntry) {
    setDisplayList(prev => [newEntry, ...prev]);
  }

  const [modelMsg, setModelMsg] = useState(null);

  function alterModel(value, msgObj) {
    setModelMsg(msgObj);
  }


  return (
    <div>
      {modelMsg != null ? <Model onCloseClicked={alterModel} title={modelMsg.title} message={modelMsg.content} /> : null}
      <EntryForm modelAction={alterModel} addEntry={addEntry} />
      <EntryList list={displayList} />
    </div>
  );
}

export default App;
