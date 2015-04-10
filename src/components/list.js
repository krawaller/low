/** @jsx React.DOM */

var React = require('react/addons'),
    Router = require('react-router'),
    Unit = require('./unit'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
        var by = this.state.by, mod = this.state.down ? 1 : -1, list = _.map(this.props.units,_.identity).sort(function(u1,u2){
            return ((u1[by]||0) > (u2[by]||0) ? -1 : 1)*mod;
        });
        var n=0, printTH = function(prop){
            return <th key={"g"+(n++)} onClick={this.sortBy.bind(this,prop)}>{prop[0].toUpperCase()+prop.substr(1,666)}{prop===by?(this.state.down?'↑':'↓'):' '}</th>
        }.bind(this);
        //console.log("LIST",list,"OFUNITS",this.props.units);
        return (
            	<table className='unittable'>
                    <thead>
                        <tr> {[
                            printTH("name"),
                            printTH("army"),
                            printTH("source"),
                            printTH("rank"),
                            printTH("type"),
                            printTH("shield"),
                            <th key='atck'>Attacks<br/>Moves</th>,
                            printTH("strongest"),
                            printTH("directions"),
                            <th key='rng'>Ranged</th>,
                            printTH("shoots"),
                            printTH("monstrous")
                        ].concat(this.props.army ? <th key='foo'></th> : [])}
                        </tr>
                    </thead>
                    <tbody>
                		{list.map(function(unit){
                			return <Unit key={unit.id} unit={unit} armyname={this.props.armyname} army={this.props.army}/>;
                		},this)}
                    </tbody>
            	</table>
        );
    }
});

module.exports = List;