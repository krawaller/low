/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Attack = require('./attack'),
    Hits = require('./hits');

var Unit = React.createClass({
    render: function() {
    	var unit = this.props.unit;
        return (
            <tr className='unit' key={unit.id}>
            	<td>{unit.name}</td>
            	<td>{unit.army}</td>
            	<td>{unit.source}</td>
            	<td>{unit.rank}</td>
            	<td>{unit.type}</td>
            	<td>{unit.shield}</td>
            	<td><Attack unit={unit}/></td>
                <td>{unit.highest}</td>
                <td>{unit.directions}</td>
            	<td>{unit.hits ? <Hits unit={unit}/> : ''}</td>
            	<td>{unit.shoots}</td>
            	<td>{unit.monstrous}</td>
            </tr>
        );
    }
});

module.exports = Unit;