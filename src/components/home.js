/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Interface = require('./interface');

var Home = React.createClass({
    render: function() {
        return (
        	<div>
            	<p>Welcome to the butt-ugly but functional Lords of War unit statistics tool!</p>
	        	<Interface units={this.props.units} />
	        </div>
        );
    }
});

module.exports = Home;