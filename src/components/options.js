/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash');

var Options = React.createClass({
    flip: function(optionname,e){
        this.props.updateOptions(_.extend({},this.props.options,_.object([optionname],[!this.props.options[optionname]])));
        e.preventDefault();
    },
    alone: function(optionname,e){
        this.props.updateOptions(_.mapValues(this.props.options,function(val,key){
            return key===optionname;
        }));
        e.preventDefault();
    },
    all: function(){
        this.props.updateOptions(_.mapValues(this.props.options,function(val,key){
            return true;
        }));
    },
    render: function() {
        return (
        	<tr className='optionlist'>
                {[<td className='optionname' onClick={this.all}>{this.props.name}: </td>].concat(_.map(this.props.options,function(selected,name){
                        return <td onClick={this.flip.bind(this,name)} onDoubleClick={this.alone.bind(this,name)} className={'option '+(selected?'selected':'')}>{name}</td>;
                },this))}
	        </tr>
        );
    }
});

module.exports = Options;