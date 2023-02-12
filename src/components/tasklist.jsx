import React from "react";

function Tasklist({ list, setList, setEdit }) {
  const handleComplete = (lists) => {
    setList(
      list.map((item) => {
        if (item.id === lists.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findLists = list.find((lists) => lists.id === id);
    setEdit(findLists);
  };

  const handleDelete = ({ id }) => {
    setList(list.filter((lists) => lists.id !== id));
  };

  return (
    <div>
      {list.map((lists) => (
        <li className="listitem" key={lists.id}>
          <input
            type="text"
            value={lists.title}
            // className={'todos ${lists.completed ? "complete" : ""}'}
            className="todos"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="completetask"
              onClick={() => handleComplete(lists)}
            >
              <i className="checkcomplete">complete</i>
            </button>

            <button className="edittask" onClick={() => handleEdit(lists)}>
              <i className="checkedit">edit</i>
            </button>

            <button className="deletetask" onClick={() => handleDelete(lists)}>
              <i className="checkdelete">delete</i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default Tasklist;
