import './App.css';
import { Component } from 'react';
import Number from './components/Number/Number.component';
import Keyboard from './components/Keyboard/Keyboard.component';
import View from './components/View/View.component';
import {evaluate} from 'mathjs';

class App extends Component {
  constructor() {
    super()
    this.state = { operations: [], displayValue: 0 }
  }

 render() {
    return (
      <div className="App">
        <View data={this.state.displayValue} />
        <Keyboard>
          <Number onClick={this.handleClick} label="C" bgcolor="gray" value="clear" />
          <Number onClick={this.handleClick} label="!" bgcolor="gray" value="!" />
          <Number onClick={this.handleClick} label="%" bgcolor="gray" value="%" />
          <Number onClick={this.handleClick} label="/" bgcolor="gray" value="/" />
          <Number onClick={this.handleClick} label="7" value="7" />
          <Number onClick={this.handleClick} label="8" value="8" />
          <Number onClick={this.handleClick} label="9" value="9" />
          <Number onClick={this.handleClick} label="*" bgcolor="gray" value="*" />
          <Number onClick={this.handleClick} label="4" value="4" />
          <Number onClick={this.handleClick} label="5" value="5" />
          <Number onClick={this.handleClick} label="6" value="6" />
          <Number onClick={this.handleClick} label="-" bgcolor="gray" value="-" />
          <Number onClick={this.handleClick} label="1" value="1" />
          <Number onClick={this.handleClick} label="2" value="2" />
          <Number onClick={this.handleClick} label="3" value="3" />
          <Number onClick={this.handleClick} label="+" bgcolor="gray" value="+" />
          <Number onClick={this.handleClick} label="0" size="2" value="0" />
          <Number onClick={this.handleClick} label="." value="." />
          <Number onClick={this.handleClick} label="=" bgcolor="gray" value="equal" />
        </Keyboard>
      </div>
    )
  }

  handleClick = e => {
    const value = e.target.getAttribute('val')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
          displayValue: 0
        })
        break
      case 'equal':
        this.calculate()
        break
      case '+':
      case '-':
      case '%':
      case '*':
      case '/':
        var dispVal = this.state.operations.join('').split(/[^0-9\.!]/g).pop();
        this.setState({
          operations: [...this.state.operations, value],
          displayValue: dispVal
        });
        break;
      default:
        var tempOperations = [...this.state.operations, value];
        this.setState({
          operations: [...this.state.operations, value],
          displayValue: tempOperations.join('').split(/[^0-9\.!]/g).pop()
        });
        break;
    }
}

calculate = () => {
  try{
    let result = this.state.operations.join('');
    if (result) {
      result = evaluate(result);
      this.setState({
        operations: [result],
        displayValue: result
      })
    }
  } catch (err) {
    console.log(err);
  }
}
}

export default App
