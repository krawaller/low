/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    List = require('./list'),
    Aggregation = require('./aggregation'),
    Search = require('./search'),
    criteria = require('../criteria'),
    _ = require('lodash');

var Interface = React.createClass({
    getInitialState: function(){ return {options:criteria}; },
    updateCriteria: function(opts){
        this.setState({options:opts});
    },
    render: function() {
        var list = _.filter(this.props.units,function(unit){
            return _.every(this.state.options,function(opts,aspect){
                return opts[unit[aspect]];
            },this);
        },this);
        var total = _.keys(this.props.units).length;
        return (
        	<div>
                <h3>Selection</h3>
                <Search options={this.state.options} submit={this.updateCriteria}/>
                {list.length && <div>
            	<h3>Aggregation</h3>
                <Aggregation units={list} />
                <h3>List</h3>
                <p className='instruction'>
These are the {list.length} matched units ({Math.round(100*list.length/total)}% of all {total}). Click a headline to sort on that aspect. Attack arrows that allow movement are shown in <span class='move'>red</span> in the grid.
                </p>
	        	<List units={list} /></div> }
	        </div>
        );
    }
});

module.exports = Interface;