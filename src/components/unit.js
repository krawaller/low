/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Attack = require('./attack'),
    Hits = require('./hits'),
    actions = require('../actions');

var Unit = React.createClass({
    add: function(){
        actions.addUnitToArmy(this.props.armyname,this.props.unit.id);
    },
    remove: function(){
        actions.removeUnitFromArmy(this.props.armyname,this.props.unit.id);
    },
    render: function() {
    	var unit = this.props.unit, army = this.props.army;
        //army && console.log("UNIT",unit.id,"ARMY",army,"PART",army[unit.id])
        return (
            <tr className='unit' key={unit.id}> {[
            	<td key='name'>{unit.name}</td>,
            	<td key='army'>{unit.army}</td>,
            	<td key='source'>{unit.source}</td>,
            	<td key='rank'>{unit.rank}</td>,
            	<td key='type'>{unit.type}</td>,
            	<td key='shield'>{unit.shield}</td>,
            	<td key='atck'><Attack unit={unit}/></td>,
                <td key='strng'>{unit.strongest}</td>,
                <td key='dir'>{unit.directions}</td>,
            	<td key='hits'>{unit.hits ? <Hits unit={unit}/> : ''}</td>,
            	<td key='shoo'>{unit.shoots}</td>,
            	<td key='mons'>{unit.monstrous}</td>,
            ].concat(army && !army[unit.id] ? <td key='but'><button onClick={this.add}>Add</button></td> : army && army[unit.id] ? <td key='but'><button onClick={this.remove}>Remove</button></td> : [])}</tr>
        );
    }
});

module.exports = Unit;