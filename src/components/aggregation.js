/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash'),
    Frequencies = require('./frequencies');

var Aggregation = React.createClass({
    render: function() {
        var army = this.props.units;
        var shielddata = _.reduce(army,function(record,unit){
            record.counts[unit.shield]++;
            return record;
        },{counts:[0,0,0,0,0,0,0,0,0,0]});
        shielddata.average = _.reduce(shielddata.counts,function(mem,amount,strength){
            return mem + amount*strength;
        },0)/army.length;
        var attackdata = _.reduce(army,function(record,unit){
            _.each(unit.attacks,function(strength,dir){
                record.total[dir]+=strength;
            });
            record.directions[unit.directions]++;
            record.highest[unit.highest]++;
            record.shoots[unit.shoots||0]++;
            record.armies[unit.army]++;
            record.ranks[unit.rank]++;
            record.types[unit.type]++;
            return record;
        },{
            total:[0,0,0,0,0,0,0,0],
            highest:[0,0,0,0,0,0],
            directions:[0,0,0,0,0,0,0,0,0],
            shoots:[0,0,0,0,0,0,0],
            armies: {dwarves:0,elves:0,orcs:0,templars:0,lizardmen:0,undead:0},
            ranks: {recruit:0,"private":0,regular:0,veteran:0,elite:0,champion:0,special:0,command:0,general:0},
            types: {infantry:0,cavalry:0,magic:0,spear:0,flying:0,berserker:0,ranged:0}
        });


        return (
            <div>
                <Frequencies description='army' frequencies={attackdata.armies} />{' '}
                <Frequencies description='ranks' frequencies={attackdata.ranks} />{' '}
                <Frequencies description='types' frequencies={attackdata.types} />{' '}
                <Frequencies description='shield' frequencies={shielddata.counts} />{' '}
                <Frequencies description='highest' frequencies={attackdata.highest} />{' '}
                <Frequencies description='directions' frequencies={attackdata.directions} />{' '}
            </div>
        )
    }
});

module.exports = Aggregation;