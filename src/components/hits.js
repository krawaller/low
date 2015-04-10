/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash');

var Hits = React.createClass({
    render: function() {
    	var track = _.reduce(this.props.unit.hits,function(o,pair){
            o[pair[0]+" "+pair[1]] = true;
            return o;
        },{});
        var print = function(place){
            return <div className={place === "0 0" ? 'home' : track[place] ? 'canhit' : 'nohit'}/>;
        }
        return (
            <table className='hitgrid'>
                <tr><td>{print('-2 4')}</td><td>{print('-1 4')}</td><td>{print('0 4')}</td><td>{print('1 4')}</td><td>{print('2 4')}</td></tr>
                <tr><td>{print('-2 3')}</td><td>{print('-1 3')}</td><td>{print('0 3')}</td><td>{print('1 3')}</td><td>{print('2 3')}</td></tr>
                <tr><td>{print('-2 2')}</td><td>{print('-1 2')}</td><td>{print('0 2')}</td><td>{print('1 2')}</td><td>{print('2 2')}</td></tr>
                <tr><td>{print('-2 1')}</td><td>{print('-1 1')}</td><td>{print('0 1')}</td><td>{print('1 1')}</td><td>{print('2 1')}</td></tr>
                <tr><td>{print('-2 0')}</td><td>{print('-1 0')}</td><td>{print('0 0')}</td><td>{print('1 0')}</td><td>{print('2 0')}</td></tr>
                <tr><td>{print('-2 -1')}</td><td>{print('-1 -1')}</td><td>{print('0 -1')}</td><td>{print('1 -1')}</td><td>{print('2 -1')}</td></tr>
                <tr><td>{print('-2 -2')}</td><td>{print('-1 -2')}</td><td>{print('0 -2')}</td><td>{print('1 -2')}</td><td>{print('2 -2')}</td></tr>
                <tr><td>{print('-2 -3')}</td><td>{print('-1 -3')}</td><td>{print('0 -3')}</td><td>{print('1 -3')}</td><td>{print('2 -3')}</td></tr>
                <tr><td>{print('-2 -4')}</td><td>{print('-1 -4')}</td><td>{print('0 -4')}</td><td>{print('1 -4')}</td><td>{print('2 -4')}</td></tr>
            </table>
        );
    }
});

module.exports = Hits;