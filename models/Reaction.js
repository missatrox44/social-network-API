//schema only
const { Schema } = require('mongoose');
// const formatDate = require('../utils/formatDate')

//create Reaction schema
const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },

  createdAt: {
    type: Date, default: Date.now, 
    // get: timestamp => formatDate(timestamp)
  }
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




module.exports = { reactionSchema };