var $ = require('jquery');
var Backbone = require('backbone');

var PhotosCollection = Backbone.Collection.extend({
  url: "http://tiny-lasagna-server.herokuapp.com/collections/graysonhicksphotos/"
});

var PhotoModel = Backbone.Model.extend({});

var ButtonModel = Backbone.Model.extend({
  defaults: {
    likes: 0,
    tag: "Likes"
  }
});

var ButtonCollection = Backbone.Collection.extend({
  model: ButtonModel
});

module.exports = {
  ButtonCollection: ButtonCollection,
  PhotosCollection: PhotosCollection
};
