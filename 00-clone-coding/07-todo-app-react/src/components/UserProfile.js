import React from "react";
import "../styles/content.css";

function UserProfile() {
    return (
        <section className="user-profile-container">
            <img
                className="user-profile-picture"
                src="../assets/images/profile-img.jpg"
                alt="profile"
            />
            <div className="text-group">
                <p className="user-name"><b>경희</b></p>
                <p className="user-ment">눈물보다 콧물을 흘리는 사람이 될 거예요</p>
            </div>
        </section>
    );
}

export default UserProfile;
