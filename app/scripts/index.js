var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var navBarComponent = require('./components/navbar.jsx');
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



photos.add([
  {
    name: "first",
    url: "http://unsplash.it/400",
    caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
  },
  {
    name: "second",
    url: "http://unsplash.it/400",
    caption: "Et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "third",
    url: "http://unsplash.it/400",
    caption: "Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum"
  },
  {
    name: "fourth",
    url: "http://unsplash.it/400",
    caption: "Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"
  }
]);

// photos.fetch();

ReactDOM.render(
  React.createElement(PhotosList, {
    collection: photos
  }),
  $('.img-feed-container')[0]
);

ReactDOM.render(
  React.createElement(FormTemplate, {
    collection: photos
  }),
  $('.add-container')[0]
);

// ReactDOM.render(
//   <ButtonsListComponent collection={buttons}/>,
//   $('.button-container')[0]
// );

ReactDOM.render(
  React.createElement(NavBar),
  $('.navbar')[0]
);
