import React, { Component } from 'react'


class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  handleClickInc = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleClickDec = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  handleClickReset = () => {
    this.setState({
      count: 0
    })
  }



  render() {
    return <div>
      <h1>Counter</h1>
      <h2 className="counter">{this.state.count}</h2>
      <button className="inc_Btn" onClick={this.handleClickInc}>+</button>
      <button className="inc_Btn" onClick={this.handleClickDec}>-</button>
      <button className="inc_Btn" onClick={this.handleClickReset}>0</button>
    </div>
  }
}


export default Counter