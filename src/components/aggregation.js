/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    _ = require('lodash'),
    Frequencies = require('./frequencies'),
    Reticule = require('./reticule'),
    criteria = require('../criteria');

var Aggregation = React.createClass({
    render: function() {
        var army = this.props.units;
        var total = _.keys(this.props.units).length;
        var data = _.reduce(army,function(record,unit){
            _.each(criteria,function(def,propname){
                record[propname][unit[propname]] = record[propname][unit[propname]]+1;
            });
            _.each(unit.attacks,function(strength,dir){
                record.dirtotals[dir]+=strength;
                record.dircounts[dir]+=Math.min(strength,1);
            });
            return record;
        },_.extend({},{
            dirtotals:[0,0,0,0,0,0,0,0],
            dircounts:[0,0,0,0,0,0,0,0]
        },_.mapValues(criteria,function(def){return _.mapValues(def,function(){return 0;});})));
        data.diraverages = _.map(_.range(0,8),function(n){ return data.dirtotals[n]/(data.dircounts[n]||1); });
        data.dirpercentage = _.map(_.range(0,8),function(n){ return 100*data.dircounts[n]/total; });

        return (
            <div>
                {_.reduce(criteria,function(mem,opts,name){
                    return mem.concat([<Frequencies key={name} description={name} frequencies={data[name]} />,' '])
                },[])}
                <br/>
                <Reticule description='avrg' dirs={data.diraverages} />{' '}
                <Reticule description='freq' dirs={data.dircounts} />{' '}
                <Reticule description='%' dirs={data.dirpercentage} />{' '}
            </div>
        )
    }
});

module.exports = Aggregation;