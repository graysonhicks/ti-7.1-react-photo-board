var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var formComponents = require('./components/form.jsx');
var feedComponents = require('./components/feed.jsx');
var models = require('./models/models.js');

var photos = new models.PhotosCollection();
var photosList = feedComponents.photosList;
var formTemplate = formComponents.formTemplate;

console.log(photos);
console.log(photosList);


photos.add([
  {
    name: "first",
    url: "http://unsplash.it/300",
    caption: "test"
  },
  {
    name: "second",
    url: "http://unsplash.it/300",
    caption: "test2"
  },
  {
    name: "third",
    url: "http://unsplash.it/300",
    caption: "test3"
  },
]);

photos.fetch();

ReactDOM.render(
  <photosList collection={photos}/>,
  $('.img-feed-container')[0]
);


ReactDOM.render(
  <formTemplate />,
  $('.add-container')[0]
);
