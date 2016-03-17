var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var ButtonComponentList = React.createClass({ // creates list component
    mixins: [Backbone.React.Component.mixin], // backbone mixin for auto listening to models and collections
    render: function(){ // all components have render function with return of HTML
      var buttonsList = this.props.collection.map(function(model){ //maps over collection of buttons
        return ( // for each button, it runs the render of the ind. button component
          <ButtonComponent
            model={model}
            key={model.get('name')}
          /> // these set a model proprty on each instance with backbone model
        );
      });
      return (
        <p className="buttons-p">{buttonsList}</p>  // this is the return from render, it returns the built list in a html element
      )
    }
});

var ButtonComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  clickHandle: function(e){
    $(e.currentTarget).addClass("clicked"); // click handler calls other functions
    this.increaseLikes();
    this.tagSet();
  },
  increaseLikes: function(){
    var likes = this.props.model.get("likes");
    var tag = this.props.model.get("tag");
    this.props.model.set({"likes": (likes + 1)});
  },
  tagSet: function(){
    var likes = this.props.model.get("likes");
    var tag = this.props.model.get("tag");
    if(likes != 1){
      this.props.model.set({"tag": "Likes"});
      return this.props.model.get("tag");
    } else {
      this.props.model.set({"tag": "Like"});
      return this.props.model.get("tag");
    }
  },
  render: function(){
    return (
      <button onClick={this.clickHandle} className={"btn btn-lg like-button " + this.props.model.get("name")}>
        {this.props.model.get("likes")} {this.props.model.get("tag")} <i className={this.props.model.get('css')}></i>
      </button>
    )
  }
});

module.exports = {
  ButtonComponent: ButtonComponent,
  ButtonComponentList: ButtonComponentList
}
