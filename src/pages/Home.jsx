import React, { Component } from 'react'
import Buttons from '../components/Buttons'
import Header from '../components/Header'

export default class Home extends Component {
  handleclick = ({ target: { name } }) => {
    switch (name) {
      case 'GitHub':
        const gitHuB = window.location.assign('http://github.com/jessicaProenca1');
        return gitHuB;
      case 'Linkedin':
        const linkedin = window.location.assign('https://www.linkedin.com/in/jessica-proenca-dev/');
        return linkedin;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Minhas Habilidades</h1>
        <img alt="logoReact" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        <img alt="logoHtml" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
        <img alt="logocss" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
        <img alt="logojs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img alt="logoredux" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />

        <Buttons
          type="button"
          label="GitHub"
          moreClasses="btn"
          name="GitHub"
          onClick={this.handleclick}
        />
        <Buttons
          type="button"
          label="Linkedin"
          moreClasses="btn"
          name="Linkedin"
          onClick={this.handleclick}
        />
      </div>
    )
  }
}
