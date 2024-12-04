import React from "react";
import "../styles/friendList.css";
import "../assets/images/avatar.png";

const friends = [
    "조유빈",
    "김재홍",
    "강세진",
    "김유림",
    "이보미",
    "심동훈",
    "홍서연",
    "박시은",
];

function FriendList() {
    return (
        <div className="friend-list-container">
            {friends.map((friend, index) => (
                <section className="friendlist" key={index}>
                    <img className="friend-list-image" src="../../public/assets/images/avatar.png" alt="avatar" />
                    <p>{friend}</p>
                </section>
            ))}
        </div>
    );
}

export default FriendList;
