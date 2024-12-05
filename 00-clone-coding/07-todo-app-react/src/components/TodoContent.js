import React, {useState} from "react";
import "../styles/content.css";

function TodoContent() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            if (todos.includes(inputValue)) {
                alert("이미 추가된 할 일입니다.");
            } else {
                // 새로운 할 일을 추가
                setTodos([...todos, inputValue]);
                setInputValue("");
                // setTodos([...todos, inputValue]);
                // setInputValue("");
            }
        }
        ;
    }
    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const toggleComplete = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? {...todo, completed: !todo.completed} : todo
            )
        );
    };


    return (
        <section className="todo-container">
            <section className="todo-add">
                <input
                    className="todo-text"
                    type="text"
                    placeholder="오늘 할 일을 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={addTodo}
                />
            </section>
            <div className="todo-list" id="list">
                {todos.map((todo, index) => (
                    <div className="item" key={index}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "gray" : "black",
                            }}
                        >
                            {todo.text}
                        </span>
                        <input type="text" value={todo} disabled/>
                        {/*<input type="checkbox"/>*/}

                        <div className="actions">
                            <button onClick={() => deleteTodo(index)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TodoContent;
