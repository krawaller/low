/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router');

var Attack = React.createClass({
    render: function() {
    	var unit = this.props.unit,
            arr = unit.magic ? unit.magic.map(function(i){return i ? "M" : 0;}) : unit.attacks,
            print = function(n){
                var num = arr[n];
                if (!num && unit.moves && unit.moves[n]) {
                    num = "0";
                }
                return <div className={'attack '+(unit.moves && unit.moves[n] ? ' move' : '')}>{num||<span> </span>}</div>;
            }
        return (
            <table className='attackgrid'>
                <tr><td>{print(7)}</td><td>{print(0)}</td><td>{print(1)}</td></tr>
                <tr><td>{print(6)}</td><td>          </td><td>{print(2)}</td></tr>
                <tr><td>{print(5)}</td><td>{print(4)}</td><td>{print(3)}</td></tr>
            </table>
        );
    }
});

module.exports = Attack;