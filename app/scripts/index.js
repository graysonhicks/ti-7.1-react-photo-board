var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var navBarComponent = require('./components/navbar.jsx')
var formComponents = require('./components/form.jsx');
var feedComponents = require('./components/feed.jsx');
var buttonComponents = require('./components/buttons.jsx');
var models = require('./models/models.js');

var photos = new models.PhotosCollection();
var PhotosList = feedComponents.PhotosList;
var FormTemplate = formComponents.formTemplate;
var NavBar = navBarComponent.NavBar;

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

photos.add([
  {
    name: "first",
    url: "http://unsplash.it/400",
    caption: "test"
  },
  {
    name: "second",
    url: "http://unsplash.it/400",
    caption: "test2"
  },
  {
    name: "third",
    url: "http://unsplash.it/400",
    caption: "test3"
  },
  {
    name: "fourth",
    url: "http://unsplash.it/400",
    caption: "test4"
  }
]);

// photos.fetch();

ReactDOM.render(
  <PhotosList collection={photos}/>,
  $('.img-feed-container')[0]
);

ReactDOM.render(
  <FormTemplate collection={photos}/>,
  $('.add-container')[0]
);

ReactDOM.render(
  <ButtonsListComponent collection={buttons}/>,
  $('.button-container')[0]
);

ReactDOM.render(
  <NavBar />,
  $('.navbar')[0]
);
