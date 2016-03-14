var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var NavBar = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  showForm: function(){
    $('.add-container').slideToggle();
  },
  render: function() {
      return (
        <div className="container">
          <button onClick={this.showForm} className="btn btn-default pull-right"><i className="fa fa-2x fa-picture-o"></i> <i className="fa fa-plus"></i></button>
        </div>

      );
  }
});


module.exports = {
  NavBar: NavBar
}
