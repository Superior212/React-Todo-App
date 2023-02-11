import arrow from "./Assest/Arrow.png";
import arrowUp from "./Assest/ArrowUp.png";
import "./App.css";
import { useState } from "react";
import {FaEdit} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";

function App() {
  const [todoInput, settodoInput] = useState("");
  const [allTodo, setallTodo] = useState([]);
  const [editedIndex, seteditedIndex] = useState(null);
  

  function addTodoList() {
    if (editedIndex == null && todoInput!=="") {
      let newTodo = [todoInput];
      setallTodo([...allTodo, newTodo]);
    } else {
      let alleditedIndex = [...allTodo];
      alleditedIndex[editedIndex] = todoInput;
      setallTodo(alleditedIndex);
      seteditedIndex(null);
    }
    settodoInput("");
  }

  function deleteTodo(deleteIndex) {
    console.log(deleteIndex);
    let newAlltodo = [...allTodo];
    let found = newAlltodo.filter((todo, index) => index != deleteIndex);
    setallTodo(found);
  }

  function editTodo(editIndex) {
    seteditedIndex(editIndex);
    settodoInput(allTodo[editIndex]);
  }

  function clearAllTodo() {
    setallTodo([]);
  }
  return (
    <>
      <h1>TODO</h1>
      <div className="inputArea">
        <div className="todoForm">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => settodoInput(e.target.value)}
            placeholder="Create a new todo..."
          />
          <button onClick={addTodoList} className="addbtn">
            {" "}
            {editedIndex == null ? (
              <img src={arrow} className="imgArrow" />
            ) : (
              <img src={arrowUp} className="imgArrow" />
            )}{" "}
          </button>
        </div>
      </div>

      {allTodo.map((todo, index) => (
        <div key={index} className="displayArea">
          <p className="textArea">{todo}</p>
          <p className="BtnArea">
            <button className="editBtn" onClick={() => editTodo(index)}><FaEdit/></button>
            <button  className="displayBtn" onClick={() => deleteTodo(index)}><FaTrash/> </button>
          </p>
        </div>
      ))}
    
  <p className="CountArea"><span className="countText">{allTodo.length} Items</span>
  
<button onClick={clearAllTodo} className="clearBtn">Clear Complete</button>
  </p>  
    </>
  );
}

export default App;
