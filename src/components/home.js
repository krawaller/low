/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Interface = require('./interface');

var Home = React.createClass({
    render: function() {
        return (
        	<div>
            	<p>Welcome to the butt-ugly but functional <a href='http://lords-of-war.com'>Lords of War</a> unit statistics tool!</p>
                <div className='divider'/>
	        	<Interface units={this.props.units} />
	        </div>
        );
    }
});

module.exports = Home;