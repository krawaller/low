/** @jsx React.DOM */

var React = require('react'),
    Router = require('react-router'),
    RouteHandler = React.createFactory(Router.RouteHandler);

var Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <RouteHandler {...this.props} />
            </div>
        );
    }
});

module.exports = Wrapper;