var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');



var formTemplate = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(e){
    e.preventDefault(); // on click, prevent default
    var formData = {
      name: $('#title').val(), // get values from form and store in object
      url: $('#url').val(),
      caption: $('#caption').val()
    }
    this.props.collection.create(formData); //pass that object in and create on server
    },
  render: function(){
    return (
      <form role="form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="text" className="form-control" id="url" />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Caption:</label>
          <textarea className="form-control" rows="5" id="caption"></textarea>
        </div>
        <div className="form-group add-buttons-container">
          <button type="submit" className="btn btn-default cancel-button">Cancel</button>
          <button type="submit" onClick={this.handleClick} className="btn btn-success add-button">Add Photo</button>
        </div>
      </form>
    )
  }
});

// add onClick attr on button and call this.FUNCTION with function being a method on that object

module.exports = {
  formTemplate: formTemplate
}
