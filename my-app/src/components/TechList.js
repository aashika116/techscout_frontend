//Page 3 Technology List
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import App.css for consistent styling
import { FaCheckSquare, FaEdit, FaTrash, FaRegSquare } from 'react-icons/fa'; // Import icons
import ChatComponent from './Chat/ChatComponent'; // Import the reusable chat component
import Header from './Header/Header';

function TechList() {
  const [technologies, setTechnologies] = useState(['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5', 'Tech6']);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]); // Array to hold multiple selected technologies

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Create Technology Profiles');
  const [error, setError] = useState(''); // State for error handling

  const handleEditTech = (index) => {
    const newTechName = prompt('Edit Technology Name:', technologies[index]);
    if (newTechName) {
      const updatedTechnologies = [...technologies];
      updatedTechnologies[index] = newTechName;
      setTechnologies(updatedTechnologies);
    }
  };

  const handleDeleteTech = (index) => {
    const updatedTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(updatedTechnologies);
  };

  const handleSelectTechnology = (index) => {
    setSelectedTechnologies(prevSelected => {
      if (prevSelected.includes(index)) {
        // Deselect if already selected
        return prevSelected.filter(item => item !== index);
      } else {
        // Select if not already selected
        return [...prevSelected, index];
      }
    });
  };

  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setShowDropdown(false);
    setError(''); // Clear error if model is selected
  };

  const handleCreateTechProfiles = () => {
    if (selectedModel === 'Create Technology Profiles') {
      setError('Please select a model from the dropdown before proceeding.');
      return;
    }
    console.log('Selected Model:', selectedModel);
    // Navigate to ProfileList and pass the selected model as state
    navigate('/ProfileList', { state: { model: selectedModel } });
  };

  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="heading">Insert technology list & Execute profile creation</h1>
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
                <div className="circle3"></div>
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
          <div className="content">
            <h2>Technology List</h2>
            <ul className="no-bullets">
              {technologies.map((tech, index) => (
                <li key={index} className="list-item">
                  {selectedTechnologies.includes(index) ? (
                    <FaCheckSquare className="icon" onClick={() => handleSelectTechnology(index)} />
                  ) : (
                    <FaRegSquare className="icon" onClick={() => handleSelectTechnology(index)} />
                  )}
                  <FaEdit className="icon" onClick={() => handleEditTech(index)} />
                  <FaTrash className="icon" onClick={() => handleDeleteTech(index)} />
                  {tech}
                </li>
              ))}
            </ul>
            <div className="dropdown-container">
              <button className="createtech-button" onClick={handleCreateTechProfiles}>
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

      {/* Add the ChatComponent here */}
      <ChatComponent />
      <Header />
    </div>
  );
}

export default TechList;
