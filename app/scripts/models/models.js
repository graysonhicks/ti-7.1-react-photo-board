var $ = require('jquery');
var Backbone = require('backbone');

var PhotosCollection = Backbone.Collection.extend({
  url: "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  parse: function(data){
    console.log(data);
  }
});

var PhotoModel = Backbone.Model.extend({});

module.exports = {
  "PhotosCollection": PhotosCollection
};
