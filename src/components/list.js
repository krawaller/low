/** @jsx React.DOM */

var React = require('react/addons'),
    Router = require('react-router'),
    Unit = require('./unit'),
    ReactCSSTransitionGroup = React.addons.CSSTransitionGroup,
    _ = require('lodash'),
    actions = require('../actions');

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
            return <th key={"g"+(n++)} onClick={this.sortBy.bind(this,prop)}>{prop[0]+prop.substr(1,666)}{prop===by?(this.state.down?'↑':'↓'):' '}</th>
        }.bind(this);
        //console.log("LIST",list,"OFUNITS",this.props.units);
        return (
            <div>
                {this.props.army ?(
                    <p>
                        {!this.props.mine ? <button onClick={actions.addCaderToArmy.bind({},this.props.armyname,list)}>Add all matched units</button> : ''}{''}
                        <button onClick={actions.removeCaderFromArmy.bind({},this.props.armyname,list)}>{this.props.mine ? 'Remove all units' : 'Remove all matched units'}</button>
                    </p>
                ):''}
            	<table className='unittable'>
                    <thead>
                        <tr> {[
                            printTH("name"),
                            printTH("army"),
                            printTH("source"),
                            printTH("rank"),
                            printTH("type"),
                            printTH("shield"),
                            printTH("monstr"),
                            <th key='atck'>grid</th>,
                            printTH("max"),
                            printTH("total"),
                            printTH("atckdirs"),
                            printTH("movedirs"),
                            printTH("shotstr"),
                            <th key='rng'>reticule</th>,
                            printTH("shotdir")
                        ].concat(this.props.army ? <th key='foo'></th> : [])}
                        </tr>
                    </thead>
                    <tbody>
                		{list.map(function(unit){
                			return <Unit key={unit.id} unit={unit} armyname={this.props.armyname} army={this.props.army}/>;
                		},this)}
                    </tbody>
            	</table>
            </div>
        );
    }
});

module.exports = List;