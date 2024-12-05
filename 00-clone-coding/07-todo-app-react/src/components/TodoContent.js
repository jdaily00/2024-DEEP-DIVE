import React, {useState} from "react";
import "../styles/content.css";

function TodoContent() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            if (todos.some((todo) => todo.text === inputValue)) {
            // if (todos.includes(inputValue)) {
                alert("이미 추가된 할 일입니다.");
            } else {
                // 새로운 할 일을 추가
                // setTodos([...todos, inputValue]);
                setTodos([...todos, { text: inputValue, completed: false }]);
                setInputValue("");
            }
        }
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
        console.log(setTodos);
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
                {todos.map((todo, index) => {
                    console.log("todo", todo); // console.log를 JSX 외부로 이동
                    return (
                        <div className="item" key={index}>
                            <input
                                className="checkbox"
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)}
                            />
                            <span
                                className={
                                    todo.completed ? "todo-completed" : "todo-notcompleted"
                                }
                            >

                        </span>
                            <input
                                className="textbox"
                                type="text"
                                value={todo.text} // todo는 객체이므로 text 속성에 접근
                                disabled
                            />
                            <div className="delete-btn">
                                <button onClick={() => deleteTodo(index)}>삭제</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );

}

export default TodoContent;
