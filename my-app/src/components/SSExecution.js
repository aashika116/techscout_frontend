//Page 2 Execute Search Strategy
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation to get the passed state
import ChatComponent from './Chat/ChatComponent'; // Import the reusable chat component
import Header from './Header/Header';

function SSExecution() {
  const [selectedModel, setSelectedModel] = useState(''); // Initially empty to be updated from state

  const navigate = useNavigate();
  const location = useLocation(); // Used to get the state passed from SSCreation

  React.useEffect(() => {
    if (location.state && location.state.model) {
      setSelectedModel(location.state.model); // Set the model from SSCreation
    }
  }, [location]);

  const handleExecuteSearch = () => {
    navigate('/TechList'); // Navigate to the Selection page
  };

  return (
    <div className="container">
      <Header />
      <div className="heading-container">
        <h1 className="heading">Execute Search Strategy</h1>
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
                <div className="circle2"></div>
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

        <div className="box right">
          <div className="output-section">
            <h2>Output</h2>
            <div className="scrollable">
              <div className="field">
                <h3>Field 1</h3>
                <ul>
                  <li>Searchword 1</li>
                  <li>Searchword 2</li>
                  <li>Searchword 3</li>
                  <li>Searchword 4</li>
                  <li>Searchword 5</li>
                  <li>Searchword 6</li>
                  <li>Searchword 7</li>
                  <li>Searchword 8</li>
                </ul>
              </div>
              <div className="field">
                <h3>Field 2</h3>
                <ul>
                  <li>Searchword 1</li>
                  <li>Searchword 2</li>
                  <li>Searchword 3</li>
                  <li>Searchword 4</li>
                  <li>Searchword 5</li>
                  <li>Searchword 6</li>
                  <li>Searchword 7</li>
                  <li>Searchword 8</li>
                </ul>
              </div>
              <div className="field">
                <h3>Field 3</h3>
                <ul>
                  <li>Searchword 1</li>
                  <li>Searchword 2</li>
                  <li>Searchword 3</li>
                  <li>Searchword 4</li>
                  <li>Searchword 5</li>
                  <li>Searchword 6</li>
                  <li>Searchword 7</li>
                  <li>Searchword 8</li>
                </ul>
              </div>
            </div>
            <div className="buttons">
              <button className="execute-button" onClick={handleExecuteSearch}>
                Execute search
              </button>
            </div>
          </div>
        </div>
      </div>
      <ChatComponent /> {/* Use the reusable chat component */}
    </div>
  );
}

export default SSExecution;
