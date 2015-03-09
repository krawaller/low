/** @jsx React.DOM */

var React = require('react'),
    Reflux = require('reflux'),
    ArmyStore = require('../armystore'),
    actions = require('../actions'),
    Router = require('react-router'),
    Link = React.createFactory(Router.Link);

var Armies = React.createClass({
    mixins: [Reflux.connect(ArmyStore,"armies")],
    addNew: function(e){
        e.preventDefault();
        var name = this.refs.newarmyname.getDOMNode().value;
        if (this.state.armies[name]){
            alert("Armyname "+name+" is already in use!");
        } else if (!name || name.length < 5) {
            alert("Name must be at least 5 letters!");
        } else {
            actions.addArmy(name);
        }
    },
    deleteArmy: function(name){
        actions.deleteArmy(name);
    },
    render: function() {
        var armies = localStorage.getItem("LoWarmylist") || [];
        return (
        	<div>
            	<p className='instruction'>
This is the army selection screen. Click an army name to be taken to the unit list for that army, or create a new one!
                </p>
	        	<div>
                    <table className='unittable armytable'>
                        {[<thead><tr><th>Name</th><th>Units</th><th></th></tr></thead>].concat(<tbody>{
                            _.map(this.state.armies,function(units,armyname){
                                return (
                                    <tr>
                                        <td><Link key={armyname} to="army" params={{armyname:armyname}}>{armyname}</Link></td>
                                        <td>{_.keys(units).length}</td>
                                        <td><button onClick={this.deleteArmy.bind(this,armyname)}>Delete</button></td>
                                    </tr>
                                );
                            },this)
                        }</tbody>)}
                    </table>
                </div>
                <h3>Create new army</h3>
                <p className='instruction'>To create a new army, enter a unique name for your army and click the button. Your armies are saved using localStorage in the browser, so they are preserved between sessions.</p>
                <div className='addnew'>
                    <form onSubmit={this.addNew}>
                        <input type='text' ref='newarmyname' />{' '}
                        <button type='submit'>Create</button>
                    </form>
                </div>
	        </div>
        );
    }
});

module.exports = Armies;