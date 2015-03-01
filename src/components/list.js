/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Unit = require('./unit');

var List = React.createClass({
    render: function() {
        return (
        	<table className='unittable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Army</th>
                        <th>Source</th>
                        <th>Rank</th>
                        <th>Type</th>
                        <th>Shield</th>
                        <th>Attacks<br/>Moves</th>
                        <th>Ranged</th>
                        <th></th>
                        <th>Monstr</th>
                    </tr>
                </thead>
                <tbody>
            		{this.props.units.map(function(unit){
            			return <Unit unit={unit}/>;
            		})}
                </tbody>
        	</table>
        );
    }
});

module.exports = List;