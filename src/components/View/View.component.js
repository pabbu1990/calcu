import { Component } from 'react';

class View extends Component {
    render() {
      const string = this.props.data;
      return <div className="View"> {string} </div>
    }
  }

  export default View;