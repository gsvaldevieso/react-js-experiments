import React, { Component } from 'react';
import UserImage from './UserImage';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><UserImage /></li>
                </ul>
                <ul>
                    <li><a href="#">Sobre mim</a></li>
                    <li><a href="#">Amigos</a></li>
                    <li><a href="#">Histórico</a></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
