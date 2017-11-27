import React, { Component } from 'react';
import { Link } from 'react-router';

//Menu component renders menu Link
class Menu extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to={'/#top'}>Home</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
