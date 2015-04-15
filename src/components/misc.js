/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Misc = React.createClass({
    render: function() {
        return (
        	<div>
                <p>Miscellaneous resources:</p>
                <img className='bigpic' src='./img/flow-ranged.png'/>
                <img className='bigpic' src='./img/flow-recall.png'/>
	        </div>
        );
    }
});

module.exports = Misc;