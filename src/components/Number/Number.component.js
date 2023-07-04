import { Component } from 'react';

class Number extends Component {
    render() {
      return (
        <div
          onClick={this.props.onClick}
          className="Number"
          size={this.props.size}
          val={this.props.value}
        >
          {this.props.label}
        </div>
      )
    }
  }

  export default Number;