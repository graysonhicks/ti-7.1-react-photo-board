var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var models = require('../models/models.js');

var buttonComponents = require('./buttons.jsx');
var buttons = new models.ButtonCollection();
var ButtonsListComponent = buttonComponents.ButtonComponentList;

buttons.add([
  {
    name: "facebook",
    tag: "likes",
    likes: 0,
    css: "fa fa-thumbs-o-up thumb-up"
  },
  {
    name: "instagram",
    tag: "likes",
    likes: 0,
    css: "fa fa-heart"
  }
])

var PhotoItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleButton: function(e){
    e.preventDefault();
    // var currentText = $(e.currentTarget).text();
    // var likes = $(e.currentTarget);
    // var counter;
    // var counter =+ 1;
    // likes.text(counter);
    // return likes;
  },
  render: function(){
    console.log('photos item');
    console.log(this.props.model);
    return (
      <div className={"thumbnail img-container " + this.props.model.cid}>
        <img src={this.props.model.get("url")} />
        <div className="caption">
          <p className="thumbnail-caption-text">{this.props.model.get("caption")}</p>
          <div className="button-container">
            <ButtonsListComponent collection={buttons}/>
          </div>
        </div>
      </div>
    )
  }
});


var PhotosList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var feed = this.props.collection.map(function(model){
      console.log(model);
      return (
        <PhotoItem
          model={model}
          key={model.cid}
        /> // these set a model proprty on each instance with backbone model
      );
    });
    return (
      <div className="col-md-12 img-feed">
        {feed}
      </div>
    )
  }
});


module.exports = {
  PhotoItem: PhotoItem,
  PhotosList: PhotosList
}
