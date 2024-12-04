import React from "react";
import Header from "./components/Header";
import FriendList from "./components/FriendList";
import UserProfile from "./components/UserProfile";
import TodoContent from "./components/TodoContent";
import "./styles/general.css";

function Todo() {
    return (
        <div className="general-container">
            <div className="layout-container">
                <Header/>
                <main className="main-content-container">
                    <FriendList/>
                    <div className="content-group-container">
                        <UserProfile/>
                        <TodoContent/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Todo;
