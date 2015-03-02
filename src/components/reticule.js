/** @jsx React.DOM */

var React = require('react');

var Reticule = React.createClass({
    render: function() {
    	var arr = this.props.dirs.map(function(s){return (""+s).substr(0,4);}),
            print = function(n){
                return <div className={'attack '+(unit.moves && unit.moves[n] ? ' move' : '')}>{arr[n]||<span> </span>}</div>;
            }
        return (
            <table className='reticulegrid'>
                <tr><td>{arr[7]}</td><td>{arr[0]}</td><td>{arr[1]}</td></tr>
                <tr><td>{arr[6]}</td><td>{this.props.description}</td><td>{arr[2]}</td></tr>
                <tr><td>{arr[5]}</td><td>{arr[4]}</td><td>{arr[3]}</td></tr>
            </table>
        );
    }
});

module.exports = Reticule;