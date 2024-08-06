"use client"; 
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="sidebar">
            <h3>Recent Shoutouts →</h3>
            <div className="shoutout">
                <div className="shoutout-header">
                    <img src="/product.jpg" alt="Profile" />
                    <div className="shoutout-title">
                        <strong>Mr. Takahashi: Speak Japanese</strong>
                        <p>- Practice Japanese through...</p>
                    </div>
                </div>
                <div className="shoutout-content">
                    Shouted out <span className="highlight">Figma</span>
                    <p>Great for design, and really helps me experiment fast. The best product to...</p>
                </div>
            </div>
            <div className="shoutout">
                <div className="shoutout-header">
                    <img src="/product.jpg" alt="Profile" />
                    <div className="shoutout-title">
                        <strong>ChatGPT Queue - Queue Prompts, Save Time</strong>
                        <p>- Queue...</p>
                    </div>
                </div>
                <div className="shoutout-content">
                    Shouted out <span className="highlight">OpenAI Assistants API</span>
                    <p>No need to build complex code to automate workflows, just create a...</p>
                </div>
            </div>
            <div className="shoutout">
                <div className="shoutout-header">
                    <img src="/product.jpg" alt="Profile" />
                    <div className="shoutout-title">
                        <strong>ChatGPT Queue - Queue Prompts, Save Time</strong>
                        <p>- Queue...</p>
                    </div>
                </div>
                <div className="shoutout-content">
                    Shouted out <span className="highlight">OpenAI Assistants API</span>
                    <p>No need to build complex code to automate workflows, just create a...</p>
                </div>
            </div>
            <div className="shoutout">
                <div className="shoutout-header">
                    <img src="/product.jpg" alt="Profile" />
                    <div className="shoutout-title">
                        <strong>ChatGPT Queue - Queue Prompts, Save Time</strong>
                        <p>- Queue...</p>
                    </div>
                </div>
                <div className="shoutout-content">
                    Shouted out <span className="highlight">OpenAI Assistants API</span>
                    <p>No need to build complex code to automate workflows, just create a...</p>
                </div>
            </div>
            <div className="shoutout">
                <div className="shoutout-header">
                    <img src="/product.jpg" alt="Profile" />
                    <div className="shoutout-title">
                        <strong>ChatGPT Queue - Queue Prompts, Save Time</strong>
                        <p>- Queue...</p>
                    </div>
                </div>
                <div className="shoutout-content">
                    Shouted out <span className="highlight">OpenAI Assistants API</span>
                    <p>No need to build complex code to automate workflows, just create a...</p>
                </div>
            </div>
            <div className="shoutout">
                <div className="shoutout-header">
                    <img src="/product.jpg" alt="Profile" />
                    <div className="shoutout-title">
                        <strong>ChatGPT Queue - Queue Prompts, Save Time</strong>
                        <p>- Queue...</p>
                    </div>
                </div>
                <div className="shoutout-content">
                    Shouted out <span className="highlight">OpenAI Assistants API</span>
                    <p>No need to build complex code to automate workflows, just create a...</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
