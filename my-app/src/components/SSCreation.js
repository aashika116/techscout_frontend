//Page 1 Create Search Strategy
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatComponent from './Chat/ChatComponent'; // Import the reusable chat component
import Header from './Header/Header';

function SSCreation() {
  const [advanced, setAdvanced] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Create Search Strategy');
  const [error, setError] = useState(''); // State for error handling

  const handleAdvancedChange = (e) => {
    setAdvanced(e.target.checked);
  };

  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setShowDropdown(false);
    setError(''); // Clear error on model selection
  };

  const handleCreateSearchStrategy = () => {
    if (selectedModel === 'Create Search Strategy') {
      setError('Please select a model before proceeding.');
      return;
    }
    console.log('Selected Model:', selectedModel);
    // Navigate to SSExecution and pass the selected model as state
    navigate('/SSExecution', { state: { model: selectedModel } });
  };

  return (
    <div className="container">
      <Header />
      <div className="heading-container">
        <h1 className="heading">Create a search strategy</h1>
      </div>

      <div className="boxes">
        <div className="box left">
          <div className="todo-process-container">
            <div className="process-bar">
              <div className="circle-container">
                <div className="circle1"></div>
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

        <div className="box right">
          <div className="input-section">
            <h2>Input</h2>
            <div className="basic">
              <h3>Basic</h3>
              <textarea placeholder="Q1"></textarea>
              <textarea placeholder="Q2"></textarea>
              <textarea placeholder="Q3"></textarea>
            </div>
            <div className="advanced">
              <label>
                <input type="checkbox" onChange={handleAdvancedChange} /> Advanced
              </label>
              {advanced && (
                <>
                  <textarea placeholder="Q4"></textarea>
                  <textarea placeholder="Q5"></textarea>
                  <textarea placeholder="Q6"></textarea>
                </>
              )}
            </div>

            <div className="dropdown-container">
              <button className="create-button" onClick={handleCreateSearchStrategy}>
                {selectedModel}
                <span className="dropdown-arrow" onClick={handleDropdownToggle}>&#9662;</span>
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => handleModelSelect('GPT-4o')}>GPT-4o</a>
                  <a href="#" onClick={() => handleModelSelect('GPT-4')}>GPT-4</a>
                  <a href="#" onClick={() => handleModelSelect('GPT-3.5')}>GPT-3.5</a>
                  <a href="#" onClick={() => handleModelSelect('llama 3.1')}>llama 3.1</a>
                  <a href="#" onClick={() => handleModelSelect('llama 3')}>llama 3</a>
                </div>
              )}
            </div>

            {error && <p className="error-message">{error}</p>} {/* Display error if no model selected */}
          </div>
        </div>
      </div>
      <ChatComponent /> {/* Use the reusable chat component */}
    </div>
  );
}

export default SSCreation;
