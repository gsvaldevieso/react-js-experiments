import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <h1 className="PostTitle">Post Exemplo</h1>
                <img className="PostImage" src="http://www.taoparadise.com/assets/img/27_1.jpg" alt="Image from post"/>
                <p className="PostContent" >Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
            </div>
        );
    }
}

export default Post;
