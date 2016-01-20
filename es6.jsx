import React from 'react';  

let {
  Component, 
  PropTypes
} = React;

class MyReactComponent extends Component{
    
    static propTypes = {name: React.PropTypes.string};
    static defaultProps = { count: 0 };
    state = {count: this.props.count};

    constructor(props) {
      super(props);
      state = { count: props.count };
    }

    handleEvent = () => {
      this.setState({count: this.state.count + 1});
    }

    render() {
      return (
        <div className="greeter">
          <p key="greeter">Hello, {this.props.name}!</p>
          <div onClick={this.handleEvent}>
            Clicks: {this.state.count}
          </div>
        </div>
        );
    }
};