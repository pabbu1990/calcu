import { Component } from 'react';
class Keyboard extends Component {
    render() {
      return <div className="Keyboard"> {this.props.children} </div>
    }
}

export default Keyboard;