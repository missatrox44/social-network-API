//schema only
const { Schema } = require('mongoose');

//create Reaction schema
const reactionSchema = new Schema({
  reactionId: { type: Schema.Types.ObjectId, default: () => new Types.ObjectId() },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  // createdAt: {
  //   type: Date, default: Date.now, get: timestamp => {
  //     format_time: (timestamp) => {
  //       return date.toLocaleTimeString();
  //     },
  //       format_date: (timestamp) => {
  //         return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
  //           }`;
  //       },
  // };
    // (timestamp) },
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