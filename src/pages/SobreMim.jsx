import React, { Component } from 'react'
import Header from '../components/Header'
import mulherreact from '../image/mulherreact.png'

export default class SobreMim extends Component {
  render() {
    return (
      <div>
        <Header/>
        <img alt='foto2' className="mulherreact" src={mulherreact}/>
      </div>
    )
  }
}
