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
            	<td key='name'><div>{unit.name}</div></td>,
            	<td key='army'><div>{unit.army}</div></td>,
            	<td key='source'><div>{unit.source}</div></td>,
            	<td key='rank'><div>{unit.rank}</div></td>,
            	<td key='type'><div>{unit.type}</div></td>,
            	<td key='shield'><div>{unit.shield}</div></td>,
                <td key='mons'><div>{unit.monstrous||''}</div></td>,
            	<td key='atck'><div><Attack unit={unit}/></div></td>,
                <td key='strng'><div>{unit.maxatck||''}</div></td>,
                <td key='dir'><div>{unit.atckdirs||''}</div></td>,
                <td key='mdir'><div>{unit.movedirs||''}</div></td>,
                <td key='shoo'><div>{unit.shotstr||''}</div></td>,
            	<td key='hits'><div>{unit.hits ? <Hits unit={unit}/> : ''}</div></td>,
                <td key='firdir'><div>{unit.shotdir==='none'?'':unit.shotdir}</div></td>,
            ].concat(army && !army[unit.id] ? <td key='but'><div><button onClick={this.add}>Add</button></div></td> : army && army[unit.id] ? <td key='but'><div><button onClick={this.remove}>Remove</button></div></td> : [])}</tr>
        );
    }
});

module.exports = Unit;