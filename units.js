_ = require("lodash");

var units = {
	templars: [{
		name: "Father Nicodemus",
		rank: "general",
		type: "infantry",
		shield: 8,
		attacks: [5,3,2,0,0,0,0,0]
	},{
		name: "Brother Gabriel",
		rank: "command",
		type: "infantry",
		shield: 7,
		attacks: [3,0,3,0,3,0,3,0]
	},{
		name: "Brother Andronicus",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [3,4,5,0,0,0,1,2]
	},{
		name: "Palisade",
		rank: "veteran",
		type: "spear",
		shield: 9,
		attacks: [1,1,0,0,0,0,0,1],
		moves: [1,0,0,0,1,0,0,0],
		quantity: 3
	},{
		name: "Simeon The Divine",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [0,0,2,3,5,3,2,0]
	},{
		name: "Templar Jackal",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [3,2,0,0,0,0,0,2],
		quantity: 2
	},{
		name: "Templar Jackal",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [0,0,0,2,3,2,0,0],
		quantity: 2
	},{
		name: "Templar Lancer",
		rank: "special",
		type: "cavalry",
		shield: 6,
		attacks: [0,3,5,3,0,0,0,0],
		quantity: 2
	},{
		name: "Templar Lancer",
		rank: "special",
		type: "cavalry",
		shield: 6,
		attacks: [0,0,0,0,0,3,5,3],
		quantity: 2
	},{
		name: "Templar Longsword",
		rank: "elite",
		type: "infantry",
		shield: 4,
		attacks: [5,4,0,0,0,0,0,4]
	},{
		name: "The Merciful Sister",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [4,2,0,0,0,0,0,5]
	},{
		name: "Zadok The Confessor",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [2,0,5,0,0,0,5,0]
	},{
		name: "Templar Partisan",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,2,1,0,0,0,0,0]
	},{
		name: "Templar Partisan",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,0,1,2,0,0,0,0]
	},{
		name: "Templar Partisan",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,0,0,0,0,2,1,0]
	},{
		name: "Templar Partisan",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,0,0,0,0,0,1,2]
	},{
		name: "Templar Sanctifier",
		rank: "recruit",
		type: "berserker",
		shield: 1,
		attacks: [5,2,0,0,0,0,0,2],
		quantity: 3
	},{
		name: "Templar Sanctifier",
		rank: "recruit",
		type: "berserker",
		shield: 1,
		attacks: [0,0,0,2,5,2,0,0]
	},{
		name: "Templar Zealot",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [1,3,1,0,0,0,0,0]
	},{
		name: "Templar Zealot",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [0,0,1,3,1,0,0,0]
	},{
		name: "Templar Zealot",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [0,0,0,0,1,3,1,0]
	},{
		name: "Templar Zealot",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [1,0,0,0,0,0,1,3]
	},{
		name: "Templar Longbow",
		rank: "elite",
		type: "ranged",
		shield: 5,
		attacks: [2,2,0,0,0,0,0,2],
		shoots: 3,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 3
	},{
		name: "Templar Trebuchet",
		rank: "veteran",
		type: "ranged",
		shield: 5,
		attacks: [0,2,0,0,0,0,0,2],
		shoots: 5,
		hits: [[0,1],[0,2],[-1,3],[0,3],[1,3]],
		quantity: 3
	}],
	undead: [{
		name: "Azul the Bygone King",
		rank: "general",
		type: "infantry",
		shield: 7,
		attacks: [0,0,4,0,4,0,4,0]
	},{
		name: "Banshee",
		rank: "special",
		type: "infantry",
		shield: 4,
		attacks: [5,3,0,3,0,3,0,3],
		quantity: 2
	},{
		name: "Blood Golem",
		rank: "elite",
		type: "infantry",
		shield: 5,
		attacks: [1,4,1,0,0,0,1,4]
	},{
		name: "Black Rider",
		rank: "special",
		type: "cavalry",
		shield: 5,
		attacks: [0,5,3,5,0,0,0,0]
	},{
		name: "Black Rider",
		rank: "special",
		type: "cavalry",
		shield: 5,
		attacks: [0,0,0,0,0,5,3,5]
	},{
		name: "Ceithrel Nightwalker",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [0,0,5,0,5,0,5,0]
	},{
		name: "Cerberus",
		rank: "command",
		type: "cavalry",
		shield: 6,
		attacks: [0,0,0,4,4,4,0,0]
	},{
		name: "Headless Horseman",
		rank: "veteran",
		type: "cavalry",
		shield: 3,
		attacks: [0,4,3,4,0,0,0,0],
		quantity: 2
	},{
		name: "Headless Horseman",
		rank: "veteran",
		type: "cavalry",
		shield: 3,
		attacks: [0,0,0,0,0,4,3,4],
		quantity: 2
	},{
		name: "Hellhound",
		rank: "veteran",
		type: "cavalry",
		shield: 3,
		attacks: [0,0,1,3,4,3,1,0],
		quantity: 2
	},{
		name: "Oozool the Putrid",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [2,1,3,1,2,1,3,1]
	},{
		name: "Plague Launcher",
		rank: "elite",
		type: "ranged",
		shield: 4,
		attacks: [1,1,1,1,1,1,1,1],
		shoots: 4,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 3
	},{
		name: "Rib Quiver",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [3,3,1,0,0,0,1,3],
		shoots: 5,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]]
	},{
		name: "Skeleton Archer",
		rank: "regular",
		type: "ranged",
		shield: 3,
		attacks: [1,1,0,0,0,0,0,1],
		shoots: 3,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 4
	},{
		name: "Skeleton Spearman",
		rank: "regular",
		type: "spear",
		shield: 5,
		attacks: [1,2,1,0,0,0,0,0],
		quantity: 2
	},{
		name: "Skeleton Spearman",
		rank: "regular",
		type: "spear",
		shield: 5,
		attacks: [1,0,0,0,0,0,1,2],
		quantity: 2
	},{
		name: "Volus the Defiler",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [5,3,0,0,1,0,0,3]
	},{
		name: "Zombie Gnasher",
		rank: "recruit",
		type: "infantry",
		shield: 1,
		attacks: [4,3,0,0,0,0,0,3],
		moves: [1,1,0,0,0,0,0,1],
		quantity: 2
	},{
		name: "Zombie Gnasher",
		rank: "recruit",
		type: "infantry",
		shield: 1,
		attacks: [0,0,0,3,4,3,0,0],
		moves: [0,0,0,1,1,1,0,0],
		quantity: 2
	},{
		name: "Zombie Halberd",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,1,1,0,0,0,1,1],
		moves: [0,1,1,0,0,0,1,1],
		quantity: 3
	},{
		name: "Zombie Shambler",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [1,1,0,0,0,0,0,1],
		moves: [1,1,0,0,0,0,0,1]
	}]
};

module.exports = _.reduce(units,function(list,arr,armyname){
	return _.reduce(arr,function(list,def,x){
		for(var i=0;i<(def.quantity||1);i++){
			list.push(_.omit(_.extend(def,{army:armyname}),"quantity"));
		}
		return list;
	},list);
},[]);