//Page 4 Profile List
import React, { useState } from 'react';
import '../App.css'; // Import App.css for consistent styling
import { FaCheckSquare, FaEdit, FaTrash, FaRegSquare } from 'react-icons/fa'; // Import icons
import ChatComponent from './Chat/ChatComponent'; // Import the reusable chat component
import Header from './Header/Header';

function ProfileList() {
  const [profiles, setProfiles] = useState(['Profile1', 'Profile2', 'Profile3', 'Profile4', 'Profile5', 'Profile6']);
  const [selectedProfiles, setSelectedProfiles] = useState([]); // Array to hold multiple selected profiles

  const handleEditProfile = (index) => {
    const newProfileName = prompt('Edit Profile Name:', profiles[index]);
    if (newProfileName) {
      const updatedProfiles = [...profiles];
      updatedProfiles[index] = newProfileName;
      setProfiles(updatedProfiles);
    }
  };

  const handleDeleteProfile = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  const handleSelectProfile = (index) => {
    setSelectedProfiles(prevSelected => {
      if (prevSelected.includes(index)) {
        // Deselect if already selected
        return prevSelected.filter(item => item !== index);
      } else {
        // Select if not already selected
        return [...prevSelected, index];
      }
    });
  };

  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="heading">Profile List</h1>
      </div>

      <div className="boxes">
        <div className="box left">
        <div className="todo-process-container">
            <div className="process-bar">
              <div className="circle-container">
                <div className="circle"></div>
                <span className="label">Create a search strategy</span>
              </div>
              <div className="circle-container">
                <div className="circle"></div>
                <span className="label">Execute search strategy</span>
              </div>
              <div className="circle-container">
                <div className="circle"></div>
                <span className="label">Insert technology list & Execute profile creation</span>
              </div>
              <div className="circle-container">
                <div className="circle4"></div>
                <span className="label">Display profile list</span>
              </div>
              <div className="circle-container">
                <div className="circle5"></div>
                <span className="label">Adapt & view specific profiles</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box right">
          <div className="content">
            <h2>Profile List</h2>
            <ul className="no-bullets">
              {profiles.map((profile, index) => (
                <li key={index} className="list-item">
                  {selectedProfiles.includes(index) ? (
                    <FaCheckSquare className="icon" onClick={() => handleSelectProfile(index)} />
                  ) : (
                    <FaRegSquare className="icon" onClick={() => handleSelectProfile(index)} />
                  )}
                  <FaEdit className="icon" onClick={() => handleEditProfile(index)} />
                  <FaTrash className="icon" onClick={() => handleDeleteProfile(index)} />
                  {profile}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Add the ChatComponent here */}
      <ChatComponent />
      <Header />
    </div>
  );
}

export default ProfileList;
