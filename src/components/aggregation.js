/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash'),
    Frequencies = require('./frequencies'),
    Reticule = require('./reticule');

var Aggregation = React.createClass({
    render: function() {
        var army = this.props.units;
        var data = _.reduce(army,function(record,unit){
            _.each(unit.attacks,function(strength,dir){
                record.dirtotals[dir]+=strength;
                record.dircounts[dir]+=Math.min(strength,1);
            });
            record.directions[unit.directions]++;
            record.highest[unit.highest]++;
            record.shoots[unit.shoots||0]++;
            record.armies[unit.army]++;
            record.ranks[unit.rank]++;
            record.types[unit.type]++;
            record.shields[unit.shield]++;
            return record;
        },{
            shields:[0,0,0,0,0,0,0,0,0,0],
            dirtotals:[0,0,0,0,0,0,0,0],
            dircounts:[0,0,0,0,0,0,0,0],
            highest:[0,0,0,0,0,0],
            directions:[0,0,0,0,0,0,0,0,0],
            shoots:[0,0,0,0,0,0,0],
            armies: {dwarves:0,elves:0,orcs:0,templars:0,lizardmen:0,undead:0},
            ranks: {recruit:0,"private":0,regular:0,veteran:0,elite:0,champion:0,special:0,command:0,general:0},
            types: {infantry:0,cavalry:0,magic:0,spear:0,flying:0,berserker:0,ranged:0}
        });
        data.diraverages = _.map(_.range(0,8),function(n){ return data.dirtotals[n]/(data.dircounts[n]||1); });
        data.dirpercentage = _.map(_.range(0,8),function(n){ return 100*data.dircounts[n]/army.length; });

        return (
            <div>
                <Frequencies description='army' frequencies={data.armies} />{' '}
                <Frequencies description='ranks' frequencies={data.ranks} />{' '}
                <Frequencies description='types' frequencies={data.types} />{' '}
                <Frequencies description='shield' frequencies={data.shields} />{' '}
                <Frequencies description='highest' frequencies={data.highest} />{' '}
                <Frequencies description='directions' frequencies={data.directions} />{' '}
                <br/>
                <Reticule description='avrg' dirs={data.diraverages} />{' '}
                <Reticule description='freq' dirs={data.dircounts} />{' '}
                <Reticule description='%' dirs={data.dirpercentage} />{' '}
            </div>
        )
    }
});

module.exports = Aggregation;