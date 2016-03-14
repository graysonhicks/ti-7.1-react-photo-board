var $ = require('jquery');
var Backbone = require('backbone');

var PhotosCollection = Backbone.Collection.extend({
  url: "http://tiny-lasagna-server.herokuapp.com/collections/graysonhicksphotos/"
});

var PhotoModel = Backbone.Model.extend({});

module.exports = {
  PhotosCollection: PhotosCollection
};
