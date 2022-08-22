const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../utils/formatDate')


//create Thoughts schema
const thoughtsSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now, get: formatDate},
  username: { type: String, required: true },
  reactions:
    [reactionSchema],
},
  {
    toJSON: {
      //use getters since there is get function in Schema ->createdAt
      //default is virtuals
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

//create virtual property for reactions count
thoughtsSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  })

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;