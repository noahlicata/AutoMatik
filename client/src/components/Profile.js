import React, { useState } from "react";
import { TextInput, Label, Button } from "flowbite-react";

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

  console.log(currentUser);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Welcome to AutoMatik {currentUser.email}!
        </h3>

        {/* split */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Update Email" />
          </div>
          <TextInput
            name="email"
            type="text"
            required={true}
            onChange={handleInputChange}
          />
        </div>

        {/* split */}

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Update Password" />
          </div>
          <TextInput
            name="password"
            type="password"
            required={true}
            onChange={handleInputChange}
          />
        </div>

        {/* split */}

        <div className="w-full">
          <Button type="submit">Update Your Information</Button>
        </div>
      </div>
    </form>
  );
}

export default Profile;
