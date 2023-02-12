import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobremim">Sobre Mim</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/curriculo">Currículo</Link></li>
        </ul>
      </nav>
    )
  }
}
