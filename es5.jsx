var React = require('react');

var ComponentName = React.createClass({


    // < --------------  Component specs ------------------> //

    // **************************************************************************************************************//
    // The displayName string is used in debugging messages. JSX sets this value automatically.
    // **************************************************************************************************************//
    displayName:"",

    // **************************************************************************************************************//
    // Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
    // **************************************************************************************************************//
    getInitialState: function(){
        return {};
    },

    // **************************************************************************************************************//
    // Invoked once and cached when the class is created. Values in the mapping will be set on this.props.
    // **************************************************************************************************************//
    getDefaultProps: function(){
        return {};
    },

    // **************************************************************************************************************//
    // The render() function should be pure, meaning that it does not modify the component state. 
    // It should examine this.props and this.state and return a single child element.
    // **************************************************************************************************************//
    render: function(){
        return (<div></div>);
    },

    // **************************************************************************************************************//
    // The propTypes object allows you to validate props being passed to your components.
    // **************************************************************************************************************//
    propTypes: {
        // ------------------- Prop types --------------------------------------
        // prop: React.PropTypes.string,
        // prop: React.PropTypes.number,
        // prop: React.PropTypes.object,
        // prop: React.PropTypes.func,
        // prop: React.PropTypes.bool,
        // prop: React.PropTypes.any,
    },
    

    // **************************************************************************************************************//
    // The mixins array allows you to use mixins to share behavior among multiple components.
    // **************************************************************************************************************//
    mixins: [],

    // **************************************************************************************************************//
    // The mixins array allows you to use mixins to share behavior among multiple components.
    // Functions that can be invoked on the component without creating instances.
    // **************************************************************************************************************//
    statics: {},

    // < --------------  Components API ------------------> //

    ComponentNameAPICallWraper : {
        // **************************************************************************************************************//
        // Merges nextState with the current state.
        // data = {}
        // **************************************************************************************************************//
        setState:setState(data),

        // **************************************************************************************************************//
        // Like setState(), but deletes any pre-existing state keys that are not in nextState.
        // **************************************************************************************************************//
        replaceState:replaceState(),

        // **************************************************************************************************************//
        // Call render() on the component, skipping shouldComponentUpdate().
        // **************************************************************************************************************//
        forceUpdate:forceUpdate(),

        // **************************************************************************************************************//
        // Call render() on the component, skipping shouldComponentUpdate().
        // **************************************************************************************************************//
        findDOMNode: React.findDOMNode(node),

        // **************************************************************************************************************//
        // isMounted() returns true if the component is rendered into the DOM.
        // **************************************************************************************************************//
        isMounted:isMounted(),

        // **************************************************************************************************************//
        // To change the properties and trigger re-render
        // data = {}
        // **************************************************************************************************************//
        setProps:setProps(data),

        // **************************************************************************************************************//
        // Like setProps() but deletes any pre-existing props instead of merging the two objects.
        // data = {}
        // func =   function
        // **************************************************************************************************************//
        replaceProps:replaceProps(data,func)
    },


    // < --------------  Lifecycle Methods ------------------> //

    // **************************************************************************************************************//
    // Invoked once, both on the client and server, immediately before the initial rendering occurs. [initial renders]
    // **************************************************************************************************************//
    componentWillMount: function(){
        // Calling setState here does not cause a re-render
    },

    // **************************************************************************************************************//
    // Invoked on the client immediately after the initial rendering occurs.[initial renders]
    // **************************************************************************************************************//
    componentDidMount: function(){
        // You now have access to this.getDOMNode()
    },

    // **************************************************************************************************************//
    // Invoked when a component is receiving new prop.
    // Called BEFORE render
    // **************************************************************************************************************//
    componentWillReceiveProps: function(nextProps){
        // Not called for the initial render
        // Previous props can be accessed by this.props
        // Calling setState here does not trigger an an additional re-render**
    },

    // **************************************************************************************************************//
    // Invoked before rendering when new props or state are being received. Skips render() if returns false.
    // Called BEFORE render
    // **************************************************************************************************************//
    shouldComponentUpdate: function(nextProps, nextState){
        // If you want the render method to execute in the next step
        // return true, else return false
        return true;
    },

    // **************************************************************************************************************//
    // Invoked immediately before rendering when new props or state are being received.
    // **************************************************************************************************************//
    componentWillUpdate: function(nextProps, nextState){
        // You cannot use this.setState() in this method
    },

    // **************************************************************************************************************//
    // Invoked immediately after the component's updates are flushed to the DOM. Operate on the DOM here.
    // **************************************************************************************************************//
    componentDidUpdate: function(prevProps, prevState){
    },

    // **************************************************************************************************************//
    // Invoked immediately before a component is unmounted from the DOM.[initial renders]
    // **************************************************************************************************************//
    componentWillUnmount: function(){
    }

});

module.exports = ComponentName;