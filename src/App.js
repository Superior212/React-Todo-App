import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoInput, settodoInput] = useState("");
  const [allTodo, setallTodo] = useState([]);
  const [editedIndex, seteditedIndex] = useState(null)

  function addTodoList() {
  
    if(editedIndex==null){
      let newTodo = [todoInput];
      setallTodo([...allTodo, newTodo]);
     
    }else{
      let alleditedIndex =[...allTodo]
      alleditedIndex[editedIndex]=todoInput
      setallTodo(alleditedIndex)
    }
    settodoInput("");
  }

  function deleteTodo(deleteIndex) {
    console.log(deleteIndex);
    let newAlltodo = [...allTodo]
    let found = newAlltodo.filter((todo,index)=>(index!=deleteIndex))
    setallTodo(found)
  }

  function editTodo(editIndex){
    seteditedIndex(editIndex)
    settodoInput(allTodo[editIndex])
  }
  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => settodoInput(e.target.value)}
        className="todo"
      />

      <button onClick={addTodoList}> {editedIndex == null ? "Add Todo" : "Update"}</button>

      <h1>Todo List</h1>
      {allTodo.map((todo, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Todo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{todo}</td>
              <td>
                <button onClick={()=>editTodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
}

export default App;
