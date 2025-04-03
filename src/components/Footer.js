import React from 'react';
import vid from '../videofoot.mp4';
import { IoIosSend } from "react-icons/io";
import { FaInstagram, FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import '../componentsstyle/Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      {/* Video background */}
      <div className='video-wrapper'>
        <video src={vid} muted autoPlay loop className='videofoot'></video>
      </div>
      
      <div className='footer-content'>
        <div className='footer-text'>
          <h4>Keep in Touch</h4>
          <h2>Plan with Us</h2>
        </div>
        
        <div className='newsletter'>
          <input placeholder='Enter your email' type='email' className='email' />
          <button className='send-btn'>Send <IoIosSend /></button>
        </div>
      </div>
      
      <div className='socials'>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='social-icon' />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className='social-icon' />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='social-icon' />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='social-icon' />
        </a>
      </div>
      
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
