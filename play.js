var units = require("./units"),
	_ = require("lodash");

var undead = _.filter(units,function(u){return u.army==="undead";});
var templars = _.filter(units,function(u){return u.army==="templars";});

_.each([undead,templars],function(army){
	console.log("Data for",army[0].army);
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
		return record;
	},{total:[0,0,0,0,0,0,0,0]});
	console.log("Shield counts:",shielddata);
	console.log("Attack counts:",attackdata);
});