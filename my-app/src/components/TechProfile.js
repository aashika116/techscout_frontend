//TechProfile.js
import React, { useState } from 'react';
import { FaUpload, FaPaperPlane } from 'react-icons/fa';
import Header from './Header/Header';
import '../App.css';

function TechProfile() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput(""); // Clear the input after sending the message
        }
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="container">
            <div className="heading-container">
                <h1 className="heading">Technology Profile</h1>
            </div>
            
            <div className="boxes">
                <div className="chat-box">
                    <h2>Chat Assistant</h2>
                    <div className="scrollable">
                        {/* AI message at the top */}
                        <div className="ai-message">
                            <p>How can I help you?</p>
                        </div>
                    
                        {/* User messages below the AI message */}
                        {messages.map((message, index) => (
                            <div key={index} className="user-message">
                                <p>{message}</p>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-container">
                        <FaUpload className="upload-icon" />
                        <textarea
                            placeholder="Send a message..."
                                className="chat-input"
                                value={input}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                        />
                        <FaPaperPlane 
                            className="send-icon" 
                            onClick={handleSendMessage} 
                            style={{ cursor: 'pointer' }}  // Ensure it's clickable
                        />
                    </div>
                </div>

                <div className="content-creation">
                    <h2>Content Creation</h2>
                    <div className="scrollable">
                        <form>
                            <div className="form-group">
                                <label>Name</label>
                                <textarea></textarea>
                            </div>

                            <div className="form-group">
                                <label>Short description</label>
                                <textarea></textarea>
                            </div>

                            <div className="form-group">
                            <label>Value chain / technology usage</label>
                            <textarea></textarea>
                            </div>

                            <div className="form-group">
                                <label>Advantages</label>
                                <textarea></textarea>
                            </div>

                            <div className="form-group">
                                <label>Challenges</label>
                                <textarea></textarea>
                            </div>

                            <div className="form-group">
                                <label>Key facts</label>
                                <textarea></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="buttons">
                        <button type="button" className="save-button">Save</button>
                        <button type="button" className="export-button">Export as .docx</button>
                    </div>
                </div>
            </div>
            <Header />
        </div>
    );
}

export default TechProfile;
