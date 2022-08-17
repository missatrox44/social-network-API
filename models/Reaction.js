//schema only
const { Schema } = require('mongoose');

//create Reaction schema
const reactionSchema = new Schema({
  reactionId: { type:Schema.Types.ObjectId, default:() => new Types.ObjectId()},
  reactionBody: { type:String, required:true, maxlength:280},
  username: {type:String, required:true},
  createdAt: { type: Date, default: Date.now, get: timestamp => SOMEFUNCTIONWILLGOHERELATER(timestamp) },
},
  {
    toJSON: {
       //use getters since there is get function in Schema ->createdAt
      //default is virtuals
      getters: true,
    },
    id: false,
  }
);


// //create virtual property for reactions count
// thoughtsSchema
//   .virtual('reactionCount')
//   .get(function () {
//     return this.reactions.length;
//   })


module.exports = reactionSchema;