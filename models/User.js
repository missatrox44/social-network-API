const { Schema, model } = require('mongoose');

//create user schema
const userSchema = new Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, required: true, unique: true, match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'email must be valid'] },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thoughts',
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
}
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});


//create virtual property for friends count
userSchema
  .virtual('friendsCount')
  .get(function () {
    return this.friends.length;
  })

const User = model('user', userSchema);

module.exports = User;