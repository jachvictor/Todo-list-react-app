import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ input, setInput, list, setList, edit, setEdit }) {
  const updateLists = (title, id, completed) => {
    const newLists = list.map((lists) =>
      lists.id === id ? { title, id, completed } : lists
    );
    setList(newLists);
    setEdit("");
  };
  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      setList([...list, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateLists(input, edit.id, edit.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="enter task"
        className="taskinput"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="addbutton">{edit ? "save" : "add"}</button>
    </form>
  );
}
export default Form;
