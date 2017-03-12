import React, { Component } from 'react';
import './UserImage.css';

class UserImage extends Component {
  render() {
    return (
      <div className="UserImage">
          <img src="http://dobrovolnictvo.karpatskanadacia.sk/assets/photos/0.jpg" alt="User image"/>
          <p>Your Username Here</p>
      </div>
    );
  }
}

export default UserImage;
