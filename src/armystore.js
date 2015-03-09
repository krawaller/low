var Reflux = require('reflux'),
    actions = require('./actions');

var localStorageKey = "LordsOfWarArmies";

module.exports = Reflux.createStore({
  listenables: [actions],
  onAddArmy: function(name){
    this.DB[name] = {};
    this.update();
  },
  onDeleteArmy: function(name){
    delete this.DB[name];
    this.update();
  },
  onAddUnitToArmy: function(name,id){
    console.log("ADDING",name,id);
    this.DB[name][id] = true;
    this.update();
  },
  onRemoveUnitFromArmy: function(name,id){
    console.log("DELETING",name,id);
    delete this.DB[name][id];
    this.update();
  },
  update: function(){
    localStorage.setItem(localStorageKey,JSON.stringify(this.DB));
    this.trigger(this.DB);
  },
  getInitialState: function(){
    return (this.DB = JSON.parse(localStorage.getItem(localStorageKey)||"{}"));
  }
});