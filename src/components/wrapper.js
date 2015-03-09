/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = React.createFactory(Router.RouteHandler),
    Link = React.createFactory(Router.Link);

var Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
            	<div className="nav">
            		<Link to="home">Home</Link>
                    <Link to="statistics">Statistics</Link>
            		<Link to="armysel">Army builder</Link>
            	</div>
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = Wrapper;