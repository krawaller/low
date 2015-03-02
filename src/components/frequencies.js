/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash');

var Frequencies = React.createClass({
    render: function() {
        var a = _.reduce(this.props.frequencies,function(mem,freq,n){
            mem.count += freq;
            mem.sum += freq*n;
            return mem;
        },{sum:0,count:0},this);
        return (
        	<table className='frequencytable'>
                <tbody>
                    <tr>
                        {[<td>{this.props.description}</td>].concat(_.map(this.props.frequencies,function(freq,key){
                            return <td>{key}</td>;
                        })).concat(!_.isNaN(a.sum/a.count)?<td>Avrg</td>:[])}
                    </tr>
                    <tr>
                        {[<td>frequency</td>].concat(_.map(this.props.frequencies,function(freq){
                            return <td>{freq}</td>;
                        })).concat(!_.isNaN(a.sum/a.count)?<td className='frequencyaverage'>{((a.sum/a.count)+'').substr(0,5)}</td>:[])}
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = Frequencies;