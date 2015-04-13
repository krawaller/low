var _ = require("lodash"),
	criteria = require('./criteria');

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
		type: "berserk",
		shield: 1,
		attacks: [5,2,0,0,0,0,0,2],
		quantity: 3
	},{
		name: "Templar Sanctifier",
		rank: "recruit",
		type: "berserk",
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
		hits: [[-1,2],[-1,3],[-1,4],[0,2],[0,3],[0,4],[1,2],[1,3],[1,4]],
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
	},{
		name: "Mother Superior",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [0,1,1,1,0,1,1,1],
		shoots: 4,
		hits: [[-1,2],[0,1],[0,2],[0,3],[1,2],[-1,-2],[0,-1],[0,-2],[0,-3],[1,-2]],
		source: "promo"
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
	},{
		name: "Chancellor Snow",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [4,3,1,1,1,1,1,3],
		moves: [1,1,1,1,1,1,1,1],
		source: "promo"
	}],
	elves: [{
		name: "Erendrial Aegis",
		rank: "general",
		type: "infantry",
		shield: 6,
		attacks: [3,4,2,0,0,0,2,4]
	},{
		name: "Elven Dragoon",
		rank: "elite",
		type: "cavalry",
		shield: 4,
		attacks: [2,1,0,0,0,2,3,3]
	},{
		name: "Elven Dragoon",
		rank: "elite",
		type: "cavalry",
		shield: 4,
		attacks: [2,3,3,2,0,0,0,1]
	},{
		name: "Elven Royal Guard",
		rank: "elite",
		type: "spear",
		shield: 4,
		attacks: [3,2,2,0,0,0,2,2],
		quantity: 2
	},{
		name: "Elven Lancemaster",
		rank: "veteran",
		type: "spear",
		shield: 5,
		attacks: [0,0,0,1,5,1,0,0]
	},{
		name: "Elven Lancemaster",
		rank: "veteran",
		type: "spear",
		shield: 5,
		attacks: [5,1,0,0,0,0,0,1],
		source: "booster"
	},{
		name: "Elven Archer",
		rank: "veteran",
		type: "ranged",
		shield: 4,
		attacks: [1,1,1,0,0,0,1,1],
		shoots: 3,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 3
	},{
		name: "Elven Archer",
		rank: "veteran",
		type: "ranged",
		shield: 4,
		attacks: [0,0,1,1,1,1,1,0],
		shoots: 3,
		hits: [[-1,-1],[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-1],[1,-2],[1,-3]],
		quantity: 2,
		source: "booster"
	},{
		name: "Elven Swordsquall",
		rank: "veteran",
		type: "infantry",
		shield: 3,
		attacks: [2,2,2,0,0,1,2,2]
	},{
		name: "Elven Swordsquall",
		rank: "veteran",
		type: "infantry",
		shield: 3,
		attacks: [2,2,2,1,0,0,2,2]
	},{
		name: "Elven Bowmaiden",
		rank: "special",
		type: "ranged",
		shield: 4,
		attacks: [2,2,1,0,0,0,1,2],
		shoots: 4,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 2
	},{
		name: "Elven Bowmaiden",
		rank: "special",
		type: "ranged",
		shield: 4,
		attacks: [0,0,1,2,2,2,1,0],
		shoots: 4,
		hits: [[-1,-1],[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-1],[1,-2],[1,-3]],
		quantity: 2,
		source: "booster"
	},{
		name: "Elven Chariot",
		rank: "special",
		type: "cavalry",
		shield: 4,
		attacks: [2,4,5,4,2,0,0,0]
	},{
		name: "Elven Chariot",
		rank: "special",
		type: "cavalry",
		shield: 4,
		attacks: [2,0,0,0,2,4,5,4]
	},{
		name: "Elven Ballista",
		rank: "regular",
		type: "ranged",
		shield: 3,
		attacks: [2,0,0,0,0,0,0,0],
		shoots: 5,
		hits: [[-1,3],[0,1],[0,2],[0,3],[1,3]],
		quantity: 2
	},{
		name: "Elven Lightedge",
		rank: "regular",
		type: "infantry",
		shield: 3,
		attacks: [3,1,0,0,0,0,0,2]
	},{
		name: "Elven Lightedge",
		rank: "regular",
		type: "infantry",
		shield: 3,
		attacks: [3,2,0,0,0,0,0,1]
	},{
		name: "Elven Lancewielder",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [1,1,3,0,0,0,0,0]
	},{
		name: "Elven Lancewielder",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [1,0,0,0,0,0,3,1]
	},{
		name: "Elven Battle Tiger",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [0,2,3,2,0,0,0,0]
	},{
		name: "Elven Battle Tiger",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [0,0,0,0,0,2,3,2]
	},{
		name: "Elven Puresoul",
		rank: "recruit",
		type: "berserk",
		shield: 1,
		attacks: [0,5,5,0,0,0,0,0]
	},{
		name: "Elven Puresoul",
		rank: "recruit",
		type: "berserk",
		shield: 1,
		attacks: [0,0,5,5,0,0,0,0]
	},{
		name: "Elven Puresoul",
		rank: "recruit",
		type: "berserk",
		shield: 1,
		attacks: [0,0,0,0,0,5,5,0]
	},{
		name: "Elven Puresoul",
		rank: "recruit",
		type: "berserk",
		shield: 1,
		attacks: [0,0,0,0,0,0,5,5]
	},{
		name: "Elven Spearman",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [1,1,1,0,0,0,0,0]
	},{
		name: "Elven Spearman",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,0,1,1,1,0,0,0]
	},{
		name: "Elven Spearman",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,0,0,0,1,1,1,0]
	},{
		name: "Elven Spearman",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [1,0,0,0,0,0,1,1]
	},{
		name: "Amara Silvershadow",
		rank: "command",
		type: "spear",
		shield: 5,
		attacks: [5,0,3,0,4,0,3,0]
	},{
		name: "Vanir Alfheim",
		rank: "command",
		type: "cavalry",
		shield: 6,
		attacks: [0,2,3,1,0,1,3,2]
	},{
		name: "Narcissus Foxglove",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [4,0,3,0,0,0,3,0],
		shoots: 4,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]]
	},{
		name: "Eridia Lifrius",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [2,1,4,0,0,0,4,1]
	},{
		name: "Beladir Stormrider",
		rank: "command",
		type: "cavalry",
		shield: 5,
		attacks: [5,3,1,1,0,1,1,3]
	},{
		name: "Laerto Alfheim",
		rank: "command",
		type: "cavalry",
		shield: 5,
		attacks: [0,1,1,3,5,3,1,1],
		source: "promo"
	},{
		name: "Lesser Dragon Rider",
		rank: "champion",
		type: "cavalry",
		shield: 6,
		monstrous: 2,
		attacks: [5,2,2,0,1,0,2,2],
		moves: [1,0,0,0,1,0,0,0],
		source: "expansion"
	},{
		name: "Lesser Dragon Rider",
		rank: "champion",
		type: "cavalry",
		shield: 6,
		monstrous: 2,
		attacks: [1,0,2,2,5,2,2,0],
		moves: [1,0,0,0,1,0,0,0],
		source: "expansion"
	},{
		name: "Golden Eagle",
		rank: "private",
		type: "flying",
		shield: 3,
		attacks: [2,3,2,0,0,0,0,0],
		source: "expansion"
	},{
		name: "Golden Eagle",
		rank: "private",
		type: "flying",
		shield: 3,
		attacks: [0,0,2,3,2,0,0,0],
		source: "expansion"
	},{
		name: "Golden Eagle",
		rank: "private",
		type: "flying",
		shield: 3,
		attacks: [0,0,0,0,2,3,2,0],
		source: "expansion"
	},{
		name: "Golden Eagle",
		rank: "private",
		type: "flying",
		shield: 3,
		attacks: [2,0,0,0,0,0,2,3],
		source: "expansion"
	},{
		name: "Drow Huntress",
		rank: "elite",
		type: "spear",
		shield: 5,
		attacks: [4,0,1,0,3,0,1,0],
		moves: [1,0,1,0,1,0,1,0],
		source: "expansion"
	},{
		name: "Castanea Solis",
		rank: "command",
		type: "magic",
		shield: 6,
		magic: [1,1,1,1,1,1,1,1],
		shoots: 3,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		source: "expansion"
	},{
		name: "Elder Unicorn",
		rank: "special",
		type: "cavalry",
		shield: 5,
		attacks: [1,4,4,1,1,0,0,0],
		moves: [0,1,1,0,0,0,0,0],
		source: "expansion"
	},{
		name: "Rioting Ent",
		rank: "champion",
		type: "spear",
		shield: 5,
		monstrous: 3,
		attacks: [0,0,2,5,3,5,2,0],
		moves: [0,0,0,1,0,1,0,0],
		source: "expansion"
	},{
		name: "Faerie Warrior",
		rank: "private",
		type: "magic",
		shield: 5,
		magic: [1,1,1,0,0,0,1,1],
		moves: [0,0,1,0,0,0,1,0],
		source: "expansion",
	},{
		name: "Faerie Warrior",
		rank: "private",
		type: "magic",
		shield: 5,
		magic: [0,0,1,1,1,1,1,0],
		moves: [0,0,1,0,0,0,1,0],
		source: "expansion",
	},{
		name: "Ochrom the Wize",
		rank: "command",
		type: "magic",
		shield: 7,
		magic: [1,1,1,0,0,0,1,1],
		shoots: 5,
		hits: [[-2,2],[-2,3],[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3],[2,2],[2,3]],
		source: "expansion"
	},{
		name: "Easter Bunny",
		rank: "general",
		type: "infantry",
		shield: 6,
		attacks: [0,0,0,5,5,5,0,0],
		source: "promo"
	},{
		name: "Poldarc the Dutiful",
		rank: "command",
		type: "bearer",
		shield: 9,
		attacks: [0,1,1,1,1,1,1,1],
		source: "promo"
	},{
		name: "Zinnia Elegans",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [0,0,2,4,2,4,2,0],
		moves: [0,0,1,1,1,1,1,0],
		source: "promo"
	}],
	lizardmen: [{
		name: "Kai'itza of Xhotl",
		rank: "general",
		type: "infantry",
		shield: 7,
		attacks: [4,0,4,0,0,0,4,0]
	},{
		name: "Quillshot",
		rank: "elite",
		type: "ranged",
		shield: 4,
		attacks: [3,0,1,1,1,1,1,0],
		shoots: 3,
		hits: [[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,2],[1,3]],
		quantity: 4
	},{
		name: "Quillshot",
		rank: "elite",
		type: "ranged",
		shield: 4,
		attacks: [1,1,1,0,3,0,1,1],
		shoots: 3,
		hits: [[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-2],[1,-3]],
		quantity: 2,
		source: "booster"
	},{
		name: "Armoured Trike",
		rank: "special",
		type: "cavalry",
		shield: 5,
		attacks: [3,4,0,0,2,0,0,4],
		quantity: 2
	},{
		name: "Armoured Trike",
		rank: "special",
		type: "cavalry",
		shield: 5,
		attacks: [2,0,0,4,3,4,0,0],
		source: "booster"
	},{
		name: "Crocodilian Brave",
		rank: "special",
		type: "infantry",
		shield: 4,
		attacks: [4,2,3,0,2,0,3,2],
		quantity: 2
	},{
		name: "Leatherback",
		rank: "veteran",
		type: "infantry",
		shield: 4,
		attacks: [3,1,0,1,1,1,0,1],
		quantity: 2
	},{
		name: "Shrine Guardian",
		rank: "veteran",
		type: "spear",
		shield: 3,
		attacks: [0,0,0,0,0,4,1,4],
		quantity: 2
	},{
		name: "Shrine Guardian",
		rank: "veteran",
		type: "spear",
		shield: 3,
		attacks: [0,4,1,4,0,0,0,0],
		quantity: 2
	},{
		name: "Compy Dasher",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [2,2,0,0,0,0,0,2]
	},{
		name: "Compy Dasher",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [0,2,2,2,0,0,0,0]
	},{
		name: "Compy Dasher",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [0,0,0,2,2,2,0,0]
	},{
		name: "Compy Dasher",
		rank: "regular",
		type: "cavalry",
		shield: 3,
		attacks: [0,0,0,0,0,2,2,2]
	},{
		name: "Lizardman Bulwark",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [2,1,2,0,0,0,0,0],
		quantity: 2
	},{
		name: "Lizardman Bulwark",
		rank: "regular",
		type: "spear",
		shield: 4,
		attacks: [2,0,0,0,0,0,2,1],
		quantity: 2
	},{
		name: "Cruor Sacrifice",
		rank: "recruit",
		type: "berserk",
		shield: 1,
		attacks: [0,5,0,0,0,0,0,5],
		quantity: 2
	},{
		name: "Cruor Sacrifice",
		rank: "recruit",
		type: "berserk",
		shield: 1,
		attacks: [0,0,0,5,0,5,0,0],
		quantity: 2
	},{
		name: "Skink Dartspitter",
		rank: "recruit",
		type: "ranged",
		shield: 3,
		attacks: [0,0,0,0,0,0,0,0],
		shoots: 3,
		hits: [[-1,1],[-1,2],[0,1],[0,2],[0,3],[1,1],[1,2]],
		quantity: 4
	},{
		name: "Skink Dartspitter",
		rank: "recruit",
		type: "ranged",
		shield: 3,
		attacks: [0,0,0,0,0,0,0,0],
		shoots: 3,
		hits: [[-1,-1],[-1,-2],[0,-1],[0,-2],[0,-3],[1,-1],[1,-2]],
		quantity: 2,
		source: "booster"
	},{
		name: "Zund-Va the Brave",
		rank: "command",
		type: "spear",
		shield: 6,
		attacks: [0,4,1,2,0,2,1,4],
	},{
		name: "Chunkata Coldblood",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [5,2,3,0,0,0,3,2]
	},{
		name: "Dro'ka Klantos",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [0,0,3,4,1,4,3,0]
	},{
		name: "Huahua S'tonk",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [3,3,0,0,1,0,0,3],
		shoots: 5,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]]
	},{
		name: "Que-thil Sor'lax",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [3,2,3,1,0,1,3,2]
	},{
		name: "King Tetras",
		rank: "command",
		type: "infantry",
		shield: 7,
		attacks: [5,1,0,1,1,1,0,1],
		source: "promo"
	},{
		name: "Phrynos Chordata",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [2,2,2,0,3,0,2,2],
		shoots: 5,
		hits: [[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-2],[1,-3]],
		source: "expansion"
	},{
		name: "Pterodactyl",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [1,2,3,2,1,0,1,0],
		source: "expansion",
		quantity: 2
	},{
		name: "Pterodactyl",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [1,0,1,0,1,2,3,2],
		source: "expansion",
		quantity: 2
	},{
		name: "Dilophosaurus",
		rank: "private",
		type: "magic",
		shield: 4,
		magic: [0,0,1,0,1,0,1,0],
		moves: [0,0,1,0,0,0,1,0],
		shoots: 3,
		hits: [[0,-1],[0,-2],[0,-3]],
		source: "expansion"
	},{
		name: "Dilophosaurus",
		rank: "private",
		type: "magic",
		shield: 4,
		magic: [1,0,1,0,0,0,1,0],
		moves: [0,0,1,0,0,0,1,0],
		shoots: 3,
		hits: [[0,1],[0,2],[0,3]],
		source: "expansion"
	},{
		name: "King Ctenoch",
		rank: "command",
		type: "flying",
		shield: 5,
		attacks: [0,0,3,2,4,2,3,0],
		source: "promo"
	},{
		name: "Mehu Adohi",
		rank: "command",
		type: "magic",
		shield: 7,
		magic: [0,0,1,1,1,1,1,0,0],
		shoots: 5,
		hits: [[0,-1],[0,-2],[0,-3]],
		source: "expansion"
	},{
		name: "Bestial Raptor",
		rank: "special",
		type: "berserk",
		shield: 5,
		attacks: [2,5,2,1,0,0,0,1],
		source: "expansion"
	},{
		name: "Bestial Raptor",
		rank: "special",
		type: "berserk",
		shield: 5,
		attacks: [2,1,0,0,0,1,2,5],
		source: "expansion"
	},{
		name: "Ankylodon",
		rank: "champion",
		type: "cavalry",
		shield: 8,
		monstrous: 3,
		attacks: [0,0,4,0,0,2,2,2],
		moves: [0,0,1,0,0,0,0,0],
		source: "expansion"
	},{
		name: "Ankylodon",
		rank: "champion",
		type: "cavalry",
		shield: 8,
		monstrous: 3,
		attacks: [0,2,2,2,0,0,4,0],
		moves: [0,0,0,0,0,0,1,0],
		source: "expansion"
	},{
		name: "Wretched Croaker",
		rank: "elite",
		type: "spear",
		shield: 6,
		attacks: [0,1,4,1,0,0,0,0],
		moves: [0,0,1,0,0,0,0,0],
		source: "expansion"
	},{
		name: "Wretched Croaker",
		rank: "elite",
		type: "spear",
		shield: 6,
		attacks: [0,0,0,0,0,1,4,1],
		moves: [0,0,0,0,0,0,1,0],
		source: "expansion"
	},{
		name: "Gesh Acolyte",
		rank: "command",
		type: "bearer",
		shield: 9,
		attacks: [1,1,0,1,3,1,0,1],
		source: "promo"
	}],
	orcs: [{
		name: "Orc Warhog",
		rank: "elite",
		type: "cavalry",
		shield: 4,
		attacks: [2,3,4,3,0,0,0,0],
		quantity: 2
	},{
		name: "Orc Warhog",
		rank: "elite",
		type: "cavalry",
		shield: 4,
		attacks: [2,0,0,0,0,3,4,3],
		quantity: 2
	},{
		name: "Goblin Bow Pest",
		rank: "regular",
		type: "ranged",
		shield: 3,
		attacks: [2,1,0,0,0,0,0,1],
		shoots: 2,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 4
	},{
		name: "Orc Deathbringer",
		rank: "regular",
		type: "berserk",
		shield: 2,
		attacks: [5,3,0,0,0,0,0,3],
		quantity: 2
	},{
		name: "Orc Deathbringer",
		rank: "regular",
		type: "berserk",
		shield: 2,
		attacks: [0,0,0,3,5,3,0,0],
		quantity: 2
	},{
		name: "Orc Butcher",
		rank: "special",
		type: "infantry",
		shield: 4,
		attacks: [4,3,3,0,0,0,3,3],
		quantity: 2
	},{
		name: "Goblin Spider Rider",
		rank: "special",
		type: "cavalry",
		shield: 4,
		attacks: [3,2,2,1,0,1,2,2],
		quantity: 2
	},{
		name: "Orc Ravager",
		rank: "veteran",
		type: "infantry",
		shield: 3,
		attacks: [3,2,1,0,0,0,0,5],
		quantity: 2
	},{
		name: "Orc Ravager",
		rank: "veteran",
		type: "infantry",
		shield: 3,
		attacks: [3,5,0,0,0,0,1,2],
		quantity: 2
	},{
		name: "Orc Catapult",
		rank: "veteran",
		type: "ranged",
		shield: 4,
		attacks: [0,0,1,0,0,0,1,0],
		shoots: 4,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]],
		quantity: 2
	},{
		name: "Goblin Spikeman",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,1,1,1,0,0,0,0],
		quantity: 2
	},{
		name: "Goblin Spikeman",
		rank: "recruit",
		type: "spear",
		shield: 3,
		attacks: [0,0,0,0,0,1,1,1],
		quantity: 2
	},{
		name: "Goblin Shanker",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [4,1,0,0,0,0,0,0]
	},{
		name: "Goblin Shanker",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [0,0,0,1,4,0,0,0]
	},{
		name: "Goblin Shanker",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [0,0,0,0,4,1,0,0]
	},{
		name: "Goblin Shanker",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [4,0,0,0,0,0,0,1]
	},{
		name: "Vanak Fleshripper",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [3,5,1,0,0,0,1,5]
	},{
		name: "Gonke Longtooth",
		rank: "general",
		type: "infantry",
		shield: 6,
		attacks: [5,5,0,0,0,0,0,5]
	},{
		name: "Ugluk Horsekiller",
		rank: "command",
		type: "spear",
		shield: 6,
		attacks: [0,4,2,0,0,0,2,4]
	},{
		name: "Kragdish Blackmaw",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [1,3,4,0,0,0,4,3]
	},{
		name: "Snafu Bighorn",
		rank: "command",
		type: "spear",
		shield: 5,
		attacks: [1,2,2,3,0,3,2,2]
	},{
		name: "Eruugor Bloodfist",
		rank: "command",
		type: "infantry",
		shield: 5,
		attacks: [3,0,5,1,0,1,5,0]
	},{
		name: "Orc Firestarter",
		rank: "private",
		type: "magic",
		shield: 5,
		magic: [1,1,0,0,0,0,0,1],
		source: "expansion"
	},{
		name: "Orc Firestarter",
		rank: "private",
		type: "magic",
		shield: 5,
		magic: [0,1,1,1,0,0,0,0],
		source: "expansion"
	},{
		name: "Orc Firestarter",
		rank: "private",
		type: "magic",
		shield: 5,
		magic: [0,0,0,1,1,1,0,0],
		source: "expansion"
	},{
		name: "Orc Firestarter",
		rank: "private",
		type: "magic",
		shield: 5,
		magic: [0,0,0,0,0,1,1,1],
		source: "expansion"
	},{
		name: "Murder of Crows",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [3,1,1,1,1,1,1,1],
		source: "expansion"
	},{
		name: "Murder of Crows",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [1,1,3,1,1,1,1,1],
		source: "expansion"
	},{
		name: "Murder of Crows",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [1,1,1,1,3,1,1,1],
		source: "expansion"
	},{
		name: "Murder of Crows",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [1,1,1,1,1,1,3,1],
		source: "expansion"
	},{
		name: "Blark Ironhide",
		rank: "command",
		type: "infantry",
		shield: 7,
		attacks: [1,1,1,0,5,0,1,1],
		source: "expansion"
	},{
		name: "Xnurl Firebelly",
		rank: "command",
		type: "magic",
		shield: 6,
		magic: [1,1,1,1,1,1,1,1],
		source: "expansion"
	},{
		name: "Frenzied Ogre",
		rank: "champion",
		type: "infantry",
		shield: 6,
		attacks: [0,3,0,3,0,3,0,3],
		moves: [0,1,0,1,0,1,0,1],
		monstrous: 3,
		source: "expansion",
		quantity: 2
	},{
		name: "Orc Wyrm Driver",
		rank: "champion",
		type: "cavalry",
		shield: 6,
		attacks: [5,3,1,0,1,0,1,3],
		moves: [1,0,1,0,0,0,1,0],
		monstrous: 2,
		source: "expansion"
	},{
		name: "Orc Wyrm Driver",
		rank: "champion",
		type: "cavalry",
		shield: 6,
		attacks: [1,0,1,3,5,3,1,0],
		moves: [0,0,1,0,1,0,1,0],
		monstrous: 2,
		source: "expansion"
	},{
		name: "Orc Bloodskin",
		rank: "elite",
		type: "spear",
		shield: 5,
		attacks: [0,5,3,1,0,0,0,0],
		moves: [0,1,1,1,0,0,0,0],
		source: "expansion"
	},{
		name: "Orc Bloodskin",
		rank: "elite",
		type: "spear",
		shield: 5,
		attacks: [0,0,0,0,0,1,3,5],
		moves: [0,0,0,0,0,1,1,1],
		source: "expansion"
	},{
		name: "Orc Bullwhip",
		rank: "special",
		type: "ranged",
		shield: 5,
		attacks: [4,4,0,0,0,0,0,4],
		moves: [1,0,0,0,0,0,0,0],
		shoots: 5,
		hits: [[-1,2],[-1,3],[0,2],[0,3],[1,2],[1,3]],
		source: "expansion"
	},{
		name: "Orc Bullwhip",
		rank: "special",
		type: "ranged",
		shield: 5,
		attacks: [0,0,0,4,4,4,0,0],
		moves: [0,0,0,0,1,0,0,0],
		shoots: 5,
		hits: [[-1,-2],[-1,-3],[0,-2],[0,-3],[1,-2],[1,-3]],
		source: "expansion"
	},{
		name: "Urgoth Skullsplitter",
		rank: "command",
		type: "berserk",
		shield: 6,
		attacks: [0,0,1,5,0,5,1,0],
		source: "promo",
	},{
		name: "Fatty Loudmouth",
		rank: "command",
		type: "bearer",
		shield: 9,
		attacks: [2,1,0,1,1,1,0,1],
		moves: [1,0,0,0,1,0,0,0],
		source: "promo"
	},{
		name: "Gastus Vile",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [0,0,0,3,4,3,0,0],
		shoots: 5,
		hits: [[-1,-1],[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-1],[1,-2],[1,-3]],
		source: "promo"
	}],
	dwarves: [{
		name: "Dwarf Dowager",
		rank: "recruit",
		type: "berserk",
		shield: 2,
		attacks: [5,0,0,0,0,0,0,0]
	},{
		name: "Dwarf Dowager",
		rank: "recruit",
		type: "berserk",
		shield: 2,
		attacks: [0,0,5,0,0,0,0,0]
	},{
		name: "Dwarf Dowager",
		rank: "recruit",
		type: "berserk",
		shield: 2,
		attacks: [0,0,0,0,5,0,0,0]
	},{
		name: "Dwarf Dowager",
		rank: "recruit",
		type: "berserk",
		shield: 2,
		attacks: [0,0,0,0,0,0,5,0]
	},{
		name: "Dwarf Slugger",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [3,0,0,0,0,0,0,0],
		quantity: 2
	},{
		name: "Dwarf Slugger",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [0,0,3,0,0,0,0,0]
	},{
		name: "Dwarf Slugger",
		rank: "recruit",
		type: "infantry",
		shield: 3,
		attacks: [0,0,0,0,0,0,3,0]
	},{
		name: "Dwarf Berserker",
		rank: "regular",
		type: "berserk",
		shield: 2,
		attacks: [4,4,0,0,0,0,0,3]
	},{
		name: "Dwarf Berserker",
		rank: "regular",
		type: "berserk",
		shield: 2,
		attacks: [4,3,0,0,0,0,0,4]
	},{
		name: "Dwarf Sharpshooter",
		rank: "regular",
		type: "ranged",
		shield: 4,
		attacks: [0,0,0,0,0,0,0,0],
		shoots: 5,
		hits: [[0,1],[0,2],[0,3]],
		quantity: 2
	},{
		name: "Dwarf Axethrower",
		rank: "elite",
		type: "ranged",
		shield: 4,
		attacks: [3,3,0,0,0,0,0,3],
		shoots: 3,
		hits: [[-1,1],[-1,2],[0,1],[0,2],[1,1],[1,2]],
		quantity: 2
	},{
		name: "Dwarf Axethrower",
		rank: "elite",
		type: "ranged",
		shield: 4,
		attacks: [0,0,0,3,3,3,0,0],
		shoots: 3,
		hits: [[-1,-1],[-1,-2],[0,-1],[0,-2],[1,-1],[1,-2]],
		quantity: 2
	},{
		name: "Dwarf Impaler",
		rank: "regular",
		type: "spear",
		shield: 3,
		attacks: [1,1,1,1,0,0,0,1]
	},{
		name: "Dwarf Impaler",
		rank: "regular",
		type: "spear",
		shield: 3,
		attacks: [0,1,1,1,1,1,0,0]
	},{
		name: "Dwarf Impaler",
		rank: "regular",
		type: "spear",
		shield: 3,
		attacks: [0,0,0,1,1,1,1,1]
	},{
		name: "Dwarf Impaler",
		rank: "regular",
		type: "spear",
		shield: 3,
		attacks: [1,1,0,0,0,1,1,1]
	},{
		name: "Dwarf Rock Hound",
		rank: "special",
		type: "infantry",
		shield: 4,
		attacks: [2,1,0,1,2,3,4,4]
	},{
		name: "Dwarf Rock Hound",
		rank: "special",
		type: "infantry",
		shield: 4,
		attacks: [2,4,4,3,2,1,0,1]
	},{
		name: "Dwarf Ballista",
		rank: "special",
		type: "ranged",
		shield: 5,
		attacks: [4,2,0,0,0,0,0,2],
		shoots: 4,
		hits: [[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,2],[1,3]],
		quantity: 2
	},{
		name: "Dwarf Marauder",
		rank: "veteran",
		type: "infantry",
		shield: 4,
		attacks: [4,2,1,0,0,0,0,0]
	},{
		name: "Dwarf Marauder",
		rank: "veteran",
		type: "infantry",
		shield: 4,
		attacks: [4,0,0,0,0,0,1,2]
	},{
		name: "Dwarf Beastslayer",
		rank: "veteran",
		type: "spear",
		shield: 4,
		attacks: [3,2,0,0,0,0,0,2]
	},{
		name: "Dwarf Beastslayer",
		rank: "veteran",
		type: "spear",
		shield: 4,
		attacks: [0,2,3,2,0,0,0,0]
	},{
		name: "Dwarf Beastslayer",
		rank: "veteran",
		type: "spear",
		shield: 4,
		attacks: [0,0,0,2,3,2,0,0]
	},{
		name: "Dwarf Beastslayer",
		rank: "veteran",
		type: "spear",
		shield: 4,
		attacks: [0,0,0,0,0,2,3,2]
	},{
		name: "Ivor the Mad",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [4,2,1,0,0,0,1,2],
		shoots: 5,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]]
	},{
		name: "Jaeger Drakesbane",
		rank: "command",
		type: "spear",
		shield: 5,
		attacks: [0,2,1,4,1,4,1,2]
	},{
		name: "Gordona Ironhelm",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [4,0,4,0,4,0,4,0]
	},{
		name: "Krod Klouthammer",
		rank: "general",
		type: "infantry",
		shield: 7,
		attacks: [5,0,0,0,0,0,3,4]
	},{
		name: "Deadeye Jones",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [4,3,0,0,0,0,0,3],
		shoots: 5,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3]]
	},{
		name: "Mungo Lancerammer",
		rank: "command",
		type: "spear",
		shield: 6,
		attacks: [4,2,2,0,0,0,2,2]
	},{
		name: "Dwarf Organ Gun",
		rank: "special",
		type: "ranged",
		shield: 5,
		attacks: [3,2,0,0,0,0,0,2],
		shoots: 4,
		hits: [[-2,2],[-2,3],[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3],[2,2],[2,3]],
		source: "expansion"
	},{
		name: "Dwarf Organ Gun",
		rank: "special",
		type: "ranged",
		shield: 5,
		attacks: [0,0,0,2,3,2,0,0],
		shoots: 4,
		hits: [[-2,-2],[-2,-3],[-1,-1],[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-1],[1,-2],[1,-3],[2,-2],[2,-3]],
		source: "expansion"
	},{
		name: "Dwarf Shield Maiden",
		rank: "elite",
		type: "spear",
		shield: 6,
		attacks: [1,1,1,1,0,0,0,1],
		source: "expansion"
	},{
		name: "Dwarf Shield Maiden",
		rank: "elite",
		type: "spear",
		shield: 6,
		attacks: [1,1,0,0,0,1,1,1],
		source: "expansion"
	},{
		name: "Iron Walker",
		rank: "champion",
		type: "berserk",
		shield: 6,
		attacks: [2,0,2,4,0,4,2,0],
		monstrous: 2,
		source: "expansion"
	},{
		name: "Iron Walker",
		rank: "champion",
		type: "berserk",
		shield: 6,
		attacks: [0,4,2,0,2,0,2,4],
		monstrous: 2,
		source: "expansion"
	},{
		name: "Forge Troll",
		rank: "champion",
		type: "infantry",
		shield: 7,
		monstrous: 2,
		attacks: [4,0,3,0,2,0,3,0],
		moves: [1,0,1,0,1,0,1,0],
		source: "expansion"
	},{
		name: "Forge Troll",
		rank: "champion",
		type: "infantry",
		shield: 7,
		monstrous: 2,
		attacks: [2,0,3,0,4,0,3,0],
		moves: [1,0,1,0,1,0,1,0],
		source: "expansion"
	},{
		name: "Thalin Haddin",
		rank: "command",
		type: "ranged",
		shield: 5,
		attacks: [1,1,0,1,1,1,0,1],
		shoots: 5,
		hits: [[-1,1],[-1,2],[-1,3],[0,1],[0,2],[0,3],[1,1],[1,2],[1,3],[-1,-1],[-1,-2],[-1,-3],[0,-1],[0,-2],[0,-3],[1,-1],[1,-2],[1,-3]],
		source: "expansion"
	},{
		name: "Ragar Icebone",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [5,4,3,0,0,0,0,0],
		source: "expansion"
	},{
		name: "Mountain Hawk",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [2,2,2,0,0,0,2,2],
		moves: [1,0,1,0,1,0,1,0],
		source: "expansion",
		quantity: 2
	},{
		name: "Mountain Hawk",
		rank: "private",
		type: "flying",
		shield: 2,
		attacks: [0,0,2,2,2,2,2,0],
		moves: [1,0,1,0,1,0,1,0],
		source: "expansion",
		quantity: 2
	},{
		name: "Dwarf Arcanist",
		rank: "private",
		type: "magic",
		shield: 4,
		magic: [1,1,0,0,0,0,0,1],
		shoots: 2,
		hits: [[-1,1],[-1,2],[0,1],[0,2],[1,1],[1,2]],
		source: "expansion",
		quantity: 2
	},{
		name: "Dwarf Arcanist",
		rank: "private",
		type: "magic",
		shield: 4,
		magic: [0,0,0,1,1,1,0,0],
		shoots: 2,
		hits: [[-1,-1],[-1,-2],[0,-1],[0,-2],[1,-1],[1,-2]],
		source: "expansion",
		quantity: 2
	},{
		name: "Santa Claus",
		rank: "general",
		type: "infantry",
		shield: 6,
		attacks: [1,1,5,1,0,1,5,1],
		source: "promo"
	},{
		name: "Bon Bon the Bear",
		rank: "command",
		type: "spear",
		shield: 6,
		attacks: [0,0,2,2,4,2,2,0],
		source: "promo"
	},{
		name: "Fodrin Rockbeard",
		rank: "command",
		type: "bearer",
		shield: 9,
		attacks: [2,0,2,0,1,0,2,0],
		moves: [1,0,1,0,1,0,1,0],
		source: "promo"
	},{
		name: "Ivana Ironhelm",
		rank: "command",
		type: "infantry",
		shield: 6,
		attacks: [0,4,0,4,0,4,0,4],
		source: "promo"
	}]
};

var firedirdecider = function(def){
	var result =  !def.hits ? 'none' : _.reduce(def.hits,function(r,loc){
		if (loc[1]>0){
			r.up = true;
			r.res = (r.res || "up");
		} else {
			r.down = true;
			r.res = (r.res || "down");
		}
		r.res = ((r.up && r.down) ? 'both' : r.res);
		return r;
	},{}).res;
	return result;
};

var units = _.reduce(units,function(list,arr,armyname){
	return _.reduce(arr,function(list,def,x){
		_.times(def.quantity||1,function(){
			list.push(_.omit(_.extend(def,{
				id: "id"+list.length,
				army: armyname,
				source: def.source || "core",
				atckdirs: _.reduce(def.attacks||[],function(count,strength){ return count+Math.min(strength,1);},0),
				maxatck: Math.max.apply(Math,def.attacks || [0,0]),
				monstr: def.monstrous || 0,
				movedirs: def.moves ? _.reduce(def.moves,function(m,i){return m+i;},0) : 0,
				shotstr: def.shoots || 0,
				shotdir: firedirdecider(def),
				firedir: "none" //firedirdecider(def)
			}),"quantity"));
		});
		return list;
	},list);
},[]).reduce(function(ret,unit){
	ret[unit.id] = unit;
	return ret;
},{});

var faultyunits = _.filter(units,function(unit){
	return _.any(criteria,function(vals,name){
		if (!vals[unit[name]]){
			console.log("Warning! prop",name,"for unit",unit.name,"has illegal value",unit[name]);
		}
		return !vals[unit[name]];
	});
});

//console.log("UNITS",units);

if (faultyunits.length){
	console.log("FAULTY UNITS",faultyunits);
}

module.exports = units;