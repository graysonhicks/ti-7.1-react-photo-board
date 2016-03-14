var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var formTemplate = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <form role="form">
        <div class="form-group">
          <label htmlfor="title">Title:</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div class="form-group">
          <label htmlfor="url">URL:</label>
          <input type="text" className="form-control" id="url" />
        </div>
        <div class="form-group">
          <label htmlfor="comment">Caption:</label>
          <textarea className="form-control" rows="5" id="caption"></textarea>
        </div>
        <div className="form-group add-buttons-container">
          <button type="submit" className="btn btn-default">Cancel</button>
          <button type="submit" className="btn btn-success">Add Photo</button>
        </div>
      </form>
    )
  }
});

// add onClick attr on button and call this.FUNCTION with function being a method on that object
console.log('formjsx test', formTemplate);

module.exports = {
  formTemplate: formTemplate
}
