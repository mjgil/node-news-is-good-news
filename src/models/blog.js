var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var marked = require('marked');

var BlogSchema = new Schema(
  {
    title: String,
    article: String,
    author: String,
    creation_date: { type: Date, "default": Date.now }
  }
);

BlogSchema.methods.formatDate = function() {
  var d = new Date( this.creation_date );
  return d.toDateString();
}

BlogSchema.methods.formatMarkdown = function() {
  return marked( this.article );
}

var Blog = module.exports = mongoose.model('Blog', BlogSchema, 'Blogs');

