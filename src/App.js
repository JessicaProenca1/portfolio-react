import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SobreMim from './pages/SobreMim';
import Projetos from './pages/Projetos';
import Curriculo from './pages/Curriculo';



export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sobremim" component={SobreMim} />
            <Route path="/projetos" component={Projetos} />
            <Route path="/curriculo" component={Curriculo} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
