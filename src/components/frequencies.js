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
                        {[<td key='desc'>{this.props.description}</td>].concat(_.map(this.props.frequencies,function(freq,key){
                            return <td key={key}>{key}</td>;
                        })).concat(!_.isNaN(a.sum/a.count)?<td key='avrg'>Avrg</td>:[])}
                    </tr>
                    <tr>
                        {[<td key='freq'>frequency</td>].concat(_.map(this.props.frequencies,function(freq,n){
                            return <td key={n}>{freq}</td>;
                        })).concat(!_.isNaN(a.sum/a.count)?<td key='avrg' className='frequencyaverage'>{((a.sum/a.count)+'').substr(0,5)}</td>:[])}
                    </tr>
                    <tr>
                        {[<td key='pc'>percentage</td>].concat(_.map(this.props.frequencies,function(freq,n){
                            return <td key={n}>{Math.round(100*freq/a.count)}</td>;
                        })).concat(!_.isNaN(a.sum/a.count)?<td key='avrg'></td>:[])}
                    </tr>
                </tbody>
            </table>
        );
    }
});

module.exports = Frequencies;