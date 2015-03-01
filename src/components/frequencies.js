/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash');

var Frequencies = React.createClass({
    render: function() {
        var a = _.reduce(this.props.frequencies,function(mem,freq,n){
            mem.count += freq;
            mem.sum += freq*this.props.values[n];
            return mem;
        },{sum:0,count:0},this);
        return (
        	<table className='frequencytable'>
                <tbody>
                    <tr>
                        {[<td>{this.props.description}</td>].concat(this.props.values.map(function(val){
                            return <td>{val}</td>;
                        })).concat(<td>Avrg</td>)}
                    </tr>
                    <tr>
                        {[<td>frequency</td>].concat(this.props.frequencies.map(function(freq){
                            return <td>{freq}</td>;
                        })).concat(<td>{((a.sum/a.count)+'').substr(0,5)}</td>)}
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = Frequencies;