var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var ButtonComponentList = React.createClass({
    mixins: [Backbone.React.Component.mixin],
    render: function(){
      var buttonsList = this.props.collection.map(function(model){
        return (
          <ButtonComponent
            model={model}
            key={model.get('name')}
          /> // these set a model proprty on each instance with backbone model
        );
      });
      return (
        <p className="buttons-p">
          {buttonsList}
        </p>
      )
    }

});

var ButtonComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  increase: function() {
    var likes = this.props.model.get("likes");
    this.props.model.set({"likes": (likes + 1)});
    return likes;
  },
  render: function(){
    return (
      <button onClick={this.increase} className="btn btn-lg book-like-button">
        {this.props.model.get("likes")} {this.props.model.get("tag")} <i className="fa fa-thumbs-o-up thumb-up"></i>
      </button>
    )
  }
});

module.exports = {
  ButtonComponent: ButtonComponent,
  ButtonComponentList: ButtonComponentList
}
