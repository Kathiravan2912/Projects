import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  // State to hold user data and profile history
  const [userData, setUserData] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    profileImage: "https://via.placeholder.com/150", // Placeholder for profile image
    password: "********",
    mobile: "+1 123 456 7890",
    salary: "50000",
    address: "123 Main Street, City, Country",
    registeredDate: "2023-05-15",
    loginCount: 5,
  });

  // State for editing profile
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState({ ...userData, password: "" });

  // Function to handle profile update
  const handleUpdateProfile = () => {
    setUserData(newData);
    setIsEditing(false); // Close editing mode
  };

  // Function to handle password change (for now a simple alert)
  const handleChangePassword = () => {
    alert("Password changed successfully!");
    setNewData({ ...newData, password: "" });
  };

  // Function to handle login count increment
  const incrementLoginCount = () => {
    setUserData({
      ...userData,
      loginCount: userData.loginCount + 1,
    });
  };

  useEffect(() => {
    incrementLoginCount(); // Increment login count on initial load
  }, []);

  return (
    <div className="profile-container">
      {/* Buttons Section */}
      <div className="buttons-section">
        <button onClick={() => setIsEditing(true)} className="button">
          Update Profile
        </button>
        <button onClick={handleChangePassword} className="button">
          Change Password
        </button>
      </div>

      {/* User Data Section */}
      <div className="user-data-section">
        <h3>User Data</h3>
        <div className="profile-image">
          <img src={userData.profileImage} alt="Profile" />
        </div>
        <p>Username: {userData.username}</p>
        <p>Email: {userData.email}</p>
        <p>Mobile: {userData.mobile}</p>
        <p>Salary: Rs.{userData.salary}</p>
        <p>Address: {userData.address}</p>
        <p>Password: {userData.password}</p>
        <p>Registered On: {new Date(userData.registeredDate).toLocaleDateString()}</p>
      </div>

      {/* History Section */}
      <div className="history-section">
        <h3>History</h3>
        <p>Account Created: {new Date(userData.registeredDate).toLocaleString()}</p>
        <p>Login Count: {userData.loginCount}</p>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setIsEditing(false)}>
              &times;
            </button>
            <h2>Edit Profile</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProfile();
              }}
            >
              <label>
                Profile Image URL:
                <input
                  type="text"
                  value={newData.profileImage}
                  onChange={(e) =>
                    setNewData({ ...newData, profileImage: e.target.value })
                  }
                />
              </label>
              <label>
                Username:
                <input
                  type="text"
                  value={newData.username}
                  onChange={(e) =>
                    setNewData({ ...newData, username: e.target.value })
                  }
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={newData.email}
                  onChange={(e) =>
                    setNewData({ ...newData, email: e.target.value })
                  }
                />
              </label>
              <label>
                Mobile:
                <input
                  type="text"
                  value={newData.mobile}
                  onChange={(e) =>
                    setNewData({ ...newData, mobile: e.target.value })
                  }
                />
              </label>
              <label>
                Salary:
                <input
                  type="number"
                  value={newData.salary}
                  onChange={(e) =>
                    setNewData({ ...newData, salary: e.target.value })
                  }
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  value={newData.address}
                  onChange={(e) =>
                    setNewData({ ...newData, address: e.target.value })
                  }
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={newData.password}
                  onChange={(e) =>
                    setNewData({ ...newData, password: e.target.value })
                  }
                />
              </label>
              <button type="submit" className="save-button">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
