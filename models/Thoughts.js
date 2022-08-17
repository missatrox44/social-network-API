const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');


//create Thoughts schema
const thoughtsSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now, get: timestamp => SOMEFUNCTION(timestamp) },
  username: { type: String, required: true },
  reactions:
    [reactionSchema],
},
  {
    toJSON: {
      getters: true,
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