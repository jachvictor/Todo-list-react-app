import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Form from "./components/form";
import Tasklist from "./components/tasklist";
function App() {
  const initialState=JSON.parse(localStorage.getItem("list")) || [];
  const [input, setInput] = useState("");
  const [list, setList] = useState(initialState);
  const [edit, setEdit] = useState(null);

  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(list));
  }, [list]);
  return (
    <div className="App">
      <div className="contain">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            list={list}
            setList={setList}
            edit={edit}
            setEdit={setEdit}
          />
        </div>
        <div>
          <Tasklist 
          list={list} 
          setList={setList} 
          setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
