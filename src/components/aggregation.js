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
            return record;
        },{total:[0,0,0,0,0,0,0,0],highest: [0,0,0,0,0,0,0], directions:[0,0,0,0,0,0,0,0,0], shoots: [0,0,0,0,0,0,0]});


        return (
            <div>
                <Frequencies description='shield' frequencies={shielddata.counts} values={[0,1,2,3,4,5,6,7,8,9]} />{' '}
                <Frequencies description='highest' frequencies={attackdata.highest} values={[0,1,2,3,4,5,6]} />{' '}
                <Frequencies description='directions' frequencies={attackdata.directions} values={[0,1,2,3,4,5,6,7,8]} />{' '}
            </div>
        )
    }
});

module.exports = Aggregation;