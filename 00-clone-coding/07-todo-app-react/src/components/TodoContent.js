import React, { useState } from "react";
import "../styles/content.css";

function TodoContent() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
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
                        <input type="checkbox" />
                        <input type="text" value={todo} disabled />
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
