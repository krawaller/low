/** @jsx React.DOM */

var React = require('react'),
    RouOptionRowter = require('react-router'),
    OptionRow = require('./optionrow'),
    _ = require('lodash');

var Search = React.createClass({
    getInitialState: function(){
        return _.extend({search:""},this.props.options);
    },
    updateOptions: function(aspect,options){
        this.setState(_.object([aspect],[options]));
    },
    submit: function(){
        this.props.submit(_.extend({},this.state,{
            search: (this.refs.search.getDOMNode().value || '').toLowerCase()
        }));
    },
    render: function() {
        return (
        	<div>
                <p className='instruction'>Click an option to (de-)select it. Double-click to make it the only one selected in its row. Click an aspect to select all related options. When done, click the 'Search' button to update the result.</p>
                <table className='searchtable'>
                    {_.map(_.omit(this.state,"search"),function(opts,name){
                        return <OptionRow key={name} name={name} options={opts} updateOptions={this.updateOptions.bind(this,name)} />
                    },this)}
                </table>
                <p>Name matching: <input ref='search'></input></p>
                <button className='searchbutton' onClick={this.submit}>Search</button>
	        </div>
        );
    }
});

module.exports = Search;