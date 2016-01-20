import React from 'react';  

let {
  Component, 
  PropTypes
} = React;

class MyReactComponent extends Component{
  constructor(props) {
      // Operations usually carried out in componentWillMount go here
      super(props);
    }
    // defaults live as static properties 
    static propTypes = {
      name: PropTypes.bool.isRequired,
    }

    static defaultProps  = {
      name: "Hello ES 6 ",
    }
    
    render() {
      return <div>{this.props.name}</div>;
    }
};