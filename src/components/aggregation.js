/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash'),
    Frequencies = require('./frequencies'),
    Reticule = require('./reticule');

var Aggregation = React.createClass({
    render: function() {
        var army = this.props.units;
        var total = _.keys(this.props.units).length;
        var data = _.reduce(army,function(record,unit){
            _.each(unit.attacks,function(strength,dir){
                record.dirtotals[dir]+=strength;
                record.dircounts[dir]+=Math.min(strength,1);
            });
            record.atckdirs[unit.atckdirs]++;
            record.movedirs[unit.movedirs]++;
            record.maxatck[unit.maxatck]++;
            record.shotstr[unit.shotstr||0]++;
            record.armies[unit.army]++;
            record.ranks[unit.rank]++;
            record.types[unit.type]++;
            record.shields[unit.shield]++;
            record.monstr[unit.monstr]++;
            record.moving[unit.moving]++;
            record.source[unit.source]++;
            record.shotdir[unit.shotdir]++;
            return record;
        },{
            shields:[0,0,0,0,0,0,0,0,0,0],
            dirtotals:[0,0,0,0,0,0,0,0],
            dircounts:[0,0,0,0,0,0,0,0],
            maxatck:[0,0,0,0,0,0],
            atckdirs:[0,0,0,0,0,0,0,0,0],
            movedirs:[0,0,0,0,0,0,0,0,0],
            shotstr:[0,0,0,0,0,0,0],
            armies: {dwarves:0,elves:0,orcs:0,templars:0,lizardmen:0,undead:0},
            ranks: {recruit:0,"private":0,regular:0,veteran:0,elite:0,champion:0,special:0,command:0,general:0},
            types: {infantry:0,cavalry:0,magic:0,spear:0,flying:0,berserk:0,ranged:0,bearer:0},
            monstr: [0,0,0,0,0],
            moving: {yes:0,no:0},
            source: {core:0,expansion:0,promo:0},
            shotdir: {none:0,up:0,down:0,both:0}
        });
        data.diraverages = _.map(_.range(0,8),function(n){ return data.dirtotals[n]/(data.dircounts[n]||1); });
        data.dirpercentage = _.map(_.range(0,8),function(n){ return 100*data.dircounts[n]/total; });

        return (
            <div>
                <Frequencies description='army' frequencies={data.armies} />{' '}
                <Frequencies description='ranks' frequencies={data.ranks} />{' '}
                <Frequencies description='types' frequencies={data.types} />{' '}
                <Frequencies description='source' frequencies={data.source} />{' '}
                <Frequencies description='shield' frequencies={data.shields} />{' '}
                <Frequencies description='monstr' frequencies={data.monstr} />{' '}
                <Frequencies description='maxatck' frequencies={data.maxatck} />{' '}
                <Frequencies description='atckdirs' frequencies={data.atckdirs} />{' '}
                <Frequencies description='movedirs' frequencies={data.movedirs} />{' '}
                <Frequencies description='shotstr' frequencies={data.shotstr} />{' '}
                <Frequencies description='shotdir' frequencies={data.shotdir} />{' '}
                <br/>
                <Reticule description='avrg' dirs={data.diraverages} />{' '}
                <Reticule description='freq' dirs={data.dircounts} />{' '}
                <Reticule description='%' dirs={data.dirpercentage} />{' '}
            </div>
        )
    }
});

module.exports = Aggregation;