import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import ChatComponent from './Chat/ChatComponent'; // Import the reusable chat component
import Header from './Header/Header';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add class to body when Todo component mounts
    document.body.classList.add('todo-page-body');

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('todo-page-body');
    };
  }, []);

  const handleCreateSearchStrategy = () => {
    navigate('/CreateSearchStrategy'); // Navigate to SSCreation.js page
  };

  const handleUploadSearchStrategy = () => {
    navigate('/TechProfile'); // Navigate to TechProfile.js page
  };

  const handleCreateTechnologyProfile = () => {
    navigate('/TechList');
  }

  const handleAdaptTechnologyProfile = () => {
    navigate('/ProfileList');
  }

  return (
    <div className="containerr">
      <Header />
      <div className="boxesh">
        <div className="boxx lefth">

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
                <div className="circle"></div>
                <span className="label">Display profile list</span>
              </div>
              <div className="circle-container">
                <div className="circle"></div>
                <span className="label">Adapt & view specific profiles</span>
              </div>
            </div>
          </div>
        </div>

        <div className="boxx righth">

          <div className="todo-button-container">
            <button className="todo-button" onClick={handleCreateSearchStrategy}>
              Create Search Strategy
            </button>
            <button className="todo-button" onClick={handleUploadSearchStrategy}>
              Upload a Search Strategy
            </button>
            <button className="todo-button" onClick={handleCreateTechnologyProfile}>
              Create Technology Profile
            </button>
            <button className="todo-button" onClick={handleAdaptTechnologyProfile}>
              Adapt Technology Profiles
            </button>
          </div>
        </div>
      </div>

      <ChatComponent /> {/* Use the reusable chat component */}
      <Header />
    </div>
  );
}

export default Home;