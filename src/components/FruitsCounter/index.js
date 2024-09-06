// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="text-con">
            <h1 className="heading">
              Bob ate <span className="count1"> {count1} </span> mangoes
              <span className="count1"> {count2} </span> bananas
            </h1>
            <div className="fruit-card">
              <div className="mango-card">
                <div className="img-card">
                  <img
                    alt="mango"
                    className="img"
                    src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  />
                </div>
                <button
                  onClick={this.onIncrementMango}
                  className="button"
                  type="button"
                >
                  Eat Mango
                </button>
              </div>

              <div className="banana-card">
                <div className="img-card">
                  <img
                    alt="banana"
                    className="img"
                    src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  />
                </div>
                <button
                  onClick={this.onIncrementBanana}
                  className="button"
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
