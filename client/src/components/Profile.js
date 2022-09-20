import React, { useState } from "react";

function Profile({ currentUser, setCurrentUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }

  return (
    <div id="profile-page-container">
      <p className="headline-s">Welcome back {currentUser.email}!</p>

      <div id="profile-container">
        <form className="profile-form" onSubmit={handleSubmit}>
          {/* split */}

          <div className="field">
            <div className="labels">Update Email</div>
            <input
              className="input-field"
              name="email"
              type="text"
              placeholder={currentUser.email}
              onChange={handleInputChange}
            ></input>
          </div>

          {/* split */}

          <div className="field">
            <div className="labels">Update Password</div>
            <input
              className="input-field"
              name="password"
              type="password"
              placeholder={currentUser.password}
              onChange={handleInputChange}
            ></input>
          </div>

          {/* split */}

          <div className="field">
            <button id="profile-button" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
