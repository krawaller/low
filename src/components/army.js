/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    ArmyStore = require('../armystore'),
    actions = require('../actions'),
    Router = require('react-router'),
    Link = React.createFactory(Router.Link),
    criteria = require('../criteria'),
    Search = require('./search'),
    List = require('./list'),
    Aggregation = require('./aggregation'),
    _ = require('lodash');

var Army = React.createClass({
    mixins: [Reflux.connect(ArmyStore,"armies"),Router.State],
    getInitialState: function(){
        return { options: criteria };
    },
    updateCriteria: function(opts){
        this.setState({options:opts});
    },
    render: function() {
        var name = this.getParams().armyname,
            armyids = this.state.armies[name],
            chosenunits = _.mapValues(armyids,function(val,id){return this.props.units[id];},this);
        var list = _.filter(this.props.units,function(unit){
            return _.every(this.state.options,function(opts,aspect){
                return opts[unit[aspect]];
            },this);
        },this);
        return (
            <div>
                <Link to="/armies"><button>Back to armylist</button></Link>
                <h3>Army &quot;{name}&quot;</h3>
                {
                    !_.isEmpty(armyids) ? (
                        <div>
                            <p className='instruction'>
Here you can see the units currently in this army, and the statistics for the chosen units. Use the <strong>ranks</strong>{' '}
statistics to make sure your mercenary army is correctly put together.
                            </p>
                            <List units={chosenunits} army={armyids} armyname={name} mine={true} />
                            <Aggregation units={chosenunits} />
                        </div>                            
                    ) : <p className='instruction'>There are no units in this army yet. Add units using the list below!</p>
                }
                <h3>Add units</h3>
                <Search options={this.state.options} submit={this.updateCriteria}/>
                <List units={list} army={armyids} armyname={name} />
            </div>
        )
    }
});

module.exports = Army;