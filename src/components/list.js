/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    Unit = require('./unit');

var List = React.createClass({
    getInitialState: function(){
        return {by:"name"};
    },
    sortBy: function(by){
        if (by===this.state.by){
            this.setState({down:!this.state.down});
        } else {
            this.setState({by:by,down:false});
        }
    },
    render: function() {
        var outof = this.props.outof, by = this.state.by, mod = this.state.down ? 1 : -1, list = this.props.units.sort(function(u1,u2){
            return (u1[by]||0 > u2[by]||0 ? -1 : 1)*mod;
        });
        var n=0, printTH = function(prop){
            return <th key={n++} onClick={this.sortBy.bind(this,prop)}>{prop[0].toUpperCase()+prop.substr(1,666)}{prop===by?(this.state.down?'↑':'↓'):' '}</th>
        }.bind(this);
        return (
            <div>
                <h3>List</h3>
                <p className='instruction'>
These are the {list.length} matched units ({Math.round(100*list.length/outof)}% of all {outof}). Click a headline to sort on that aspect.
                </p>
            	<table className='unittable'>
                    <thead>
                        <tr> {[
                            printTH("name"),
                            printTH("army"),
                            printTH("source"),
                            printTH("rank"),
                            printTH("type"),
                            printTH("shield"),
                            <th>Attacks<br/>Moves</th>,
                            printTH("highest"),
                            printTH("directions"),
                            <th>Ranged</th>,
                            printTH("shoots"),
                            printTH("monstrous")
                        ]}
                        </tr>
                    </thead>
                    <tbody>
                		{this.props.units.map(function(unit){
                			return <Unit key={unit.id} unit={unit}/>;
                		})}
                    </tbody>
            	</table>
            </div>
        );
    }
});

module.exports = List;