const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');


//create Thoughts schema
const thoughtsSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now,
    //     // , get: timestamp => !!!dom/hour/min/sec/function!!! (timestamp) },
    //   username: { type: String, required: true },
    //   reactions:[reactionSchema]
  },
},
  {
    toJSON: {
      //use getters since there is get function in Schema ->createdAt
      //default is virtuals
      // getters: true,
      virtuals: true,
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