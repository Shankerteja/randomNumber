import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {RandomNumber: 0}
  ChangeNumber = () => {
    const RanNumber = Math.ceil(Math.random() * 100)
    console.log(RanNumber)
    this.setState({RandomNumber: RanNumber})
  }

  render() {
    const {RandomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.ChangeNumber}>
            Generate
          </button>
          <p className="number">{RandomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
