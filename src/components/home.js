/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Interface = require('./interface');

var Home = React.createClass({
    render: function() {
        return (
        	<div>
            	<p className='instruction'>
Welcome to the butt-ugly but functional <a href='http://lords-of-war.com'>Lords of War</a> unit statistics tool!
If something isn't working as it should or you have an idea for improvement, drop me a line at david@krawaller.se!
                </p>
	        	<Interface units={this.props.units} />
	        </div>
        );
    }
});

module.exports = Home;