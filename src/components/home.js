/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Interface = require('./interface');

var Home = React.createClass({
    render: function() {
        return (
        	<div>
                <p className='logo'><img src='./img/logo.png'/></p>
            	<p className='instruction'>
Welcome to the <a href='http://lords-of-war.com'>Lords of War</a> player aid tool! Here you can see <strong>statistics</strong> for all units or subsets of units, and/or <strong>create mercenary decks</strong> and see stats for the created decks.
    </p><p className='instruction'>
If something isn't working as it should or you have an idea for improvement, drop me a line at <a href='mailto:david@krawaller.se'>david@krawaller.se</a>!
                </p>
	        </div>
        );
    }
});

module.exports = Home;