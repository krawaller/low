/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    List = require('./list'),
    Options = require('./options'),
    Aggregation = require('./aggregation'),
    Search = require('./search');

var Interface = React.createClass({
    getInitialState: function(){
        return {
            options: {
                army: {dwarves:true,elves:true,orcs:true,templars:true,lizardmen:true,undead:true},
                source: {base:true,expansion:true,special:true},
                type: {infantry:true,cavalry:true,magic:true,spear:true,flying:true,berserker:true,ranged:true},
                rank: {recruit:true,"private":true,regular:true,veteran:true,elite:true,champion:true,special:true,command:true,general:true},
                shield: {1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true,9:true},
                highest: {0:true,1:true,2:true,3:true,4:true,5:true,6:true},
                directions: {0:true,1:true,2:true,3:true,4:true,5:true,6:true,7:true,8:true},
                moving: {yes:true,no:true},
                ismonstrous: {yes:true,no:true}
            }
        };
    },
    updateCriteria: function(opts){
        this.setState({options:opts});
    },
    render: function() {
        var list = _.filter(this.props.units,function(unit){
            return _.every(this.state.options,function(opts,aspect){
                return opts[unit[aspect]];
            },this);
        },this);
        return (
        	<div>
                <Search options={this.state.options} submit={this.updateCriteria}/>
                {list.length && <div>
            	<h3>Aggregation</h3>
                <Aggregation units={list} />
                <h3>List of the {list.length} matched units</h3>
	        	<List units={list} /></div> }
	        </div>
        );
    }
});

module.exports = Interface;