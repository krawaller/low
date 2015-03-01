/** @jsx React.DOM */

var React = require('react'),
	ReactRouter = require('react-router'),
	routes = require('./routes'),
	units = require('./units');

ReactRouter.run(routes, function(Handler, state) {
    React.render(<Handler units={units} params={state.params} />, document.body);
});