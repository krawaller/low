/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Options = require('./options');

var Search = React.createClass({
    getInitialState: function(){
        return _.extend({},this.props.options);
    },
    updateOptions: function(aspect,options){
        this.setState(_.object([aspect],[options]));
    },
    submit: function(){
        this.props.submit(this.state);
    },
    render: function() {
        return (
        	<div>
                <h3>Selection</h3>
                <p className='searchinstruction'>Click an option to (de-)select it. Double-click to make it the only one selected in its row. Click an aspect to select all related options. When done, click the 'Search' button to update the result.</p>
                <div>
                    {_.map(this.state,function(opts,name){
                        return <Options name={name} options={opts} updateOptions={this.updateOptions.bind(this,name)} />
                    },this)}
                </div>
                <button onClick={this.submit}>Search</button>
	        </div>
        );
    }
});

module.exports = Search;