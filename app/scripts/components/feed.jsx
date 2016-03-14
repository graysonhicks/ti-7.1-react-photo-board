var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var models = require('./models/models.js');

var photoItem = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div class="thumbnail img-container">
        <img src={this.props.model.get("url")}>
        <div class="caption">
          <p class="thumbnail-caption-text">{this.props.model.get("caption")}</p>
          <p class="button-container"><a href="#" class="btn btn-primary" role="button"><i class="fa fa-facebook-square"></i></a> <a href="#" class="btn btn-default" role="button"><i class="fa fa-instagram"></i></a></p>
        </div>
      </div>
    )
  }
});

var photosList = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var feed = this.props.collection.map(function(model){
      return (
        <photoItem model={model} key={model.get('url')}/>
      );
    });
    return (
      <div className="col-md-8 col-md-offset-2 img-feed">
        {feed}
      </div>
    )
  }
});

var photos = new models.PhotosCollection();

photos.fetch();

ReactDOM.render(
  <photosList collection={photos}/>,
  $('.img-feed-container');
);

module.exports = {
  photoItem: photoItem,
  photosList: photosList
}
